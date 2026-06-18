import crypto from 'crypto';

export const config = {
  api: {
    bodyParser: false, // Disable Vercel body parser to get the raw body needed for signature verification
  },
};

async function getRawBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf-8');
}

export default async function handler(req, res) {
  // 1. GET requests (used by iFood to test connectivity/existence)
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'ok', message: 'Webhook HESO PDV ativo.' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    // 2. Read raw body
    const rawBody = await getRawBody(req);

    // 3. Verify Signature if webhookSecret is configured
    const webhookSecret = process.env.IFOOD_WEBHOOK_SECRET;
    const receivedSignature = req.headers['x-ifood-signature'];

    if (webhookSecret) {
      if (!receivedSignature) {
        return res.status(401).json({ error: 'Assinatura X-iFood-Signature ausente.' });
      }

      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(rawBody)
        .digest('hex');

      // Safe constant-time comparison to prevent timing attacks
      const isSignatureValid = crypto.timingSafeEqual(
        Buffer.from(expectedSignature, 'hex'),
        Buffer.from(receivedSignature, 'hex')
      );

      if (!isSignatureValid) {
        return res.status(401).json({ error: 'Assinatura inválida. Acesso não autorizado.' });
      }
    }

    // 4. Parse body into JSON
    if (!rawBody) {
      return res.status(400).json({ error: 'Payload inválido ou vazio.' });
    }

    let events = JSON.parse(rawBody);

    // Normalize events to array
    if (!Array.isArray(events)) {
      if (events && events.id) {
        events = [events];
      } else {
        return res.status(400).json({ error: 'Formato de evento inválido.' });
      }
    }

    // 5. Prepare rows for batch insert into Supabase
    const rows = events.map(event => ({
      provider: 'ifood',
      event_id: event.id || `evt_${Math.random().toString(36).substr(2, 9)}`,
      event_type: event.code || event.fullCode || 'UNKNOWN',
      order_id: event.orderId || null,
      payload: event,
      received_at: new Date().toISOString()
    }));

    // 6. Save events to Supabase REST API
    const supabaseResponse = await fetch(`${process.env.SUPABASE_URL}/rest/v1/webhook_events?on_conflict=event_id`, {
      method: 'POST',
      headers: {
        'apikey': process.env.SUPABASE_SECRET_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=ignore-duplicates' // ON CONFLICT DO NOTHING
      },
      body: JSON.stringify(rows)
    });

    if (!supabaseResponse.ok) {
      const dbErr = await supabaseResponse.text();
      return res.status(500).json({
        error: 'Erro ao salvar credenciais no banco de dados.',
        details: dbErr
      });
    }

    // Return 202 Accepted to confirm event receipt as recommended by iFood
    return res.status(202).json({ status: 'ok', events_received: events.length });

  } catch (error) {
    return res.status(500).json({
      error: 'Erro ao processar webhook.',
      details: error.message
    });
  }
}
