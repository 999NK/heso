export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const code = req.query.code;
  if (!code) {
    return res.status(400).json({ error: 'Código de autorização ausente.' });
  }

  const clientId = process.env.AIQFOME_CLIENT_ID;
  const clientSecret = process.env.AIQFOME_CLIENT_SECRET;
  const redirectUri = process.env.AIQFOME_REDIRECT_URI || 'https://pdv.heso.com.br/api/aiqfome-callback';

  if (!clientId || !clientSecret) {
    return res.status(500).json({
      error: 'Variáveis de ambiente não configuradas na Vercel.',
      details: 'As variáveis AIQFOME_CLIENT_ID ou AIQFOME_CLIENT_SECRET não foram encontradas nas configurações de variáveis de ambiente da Vercel. Certifique-se de adicioná-las no dashboard da Vercel.'
    });
  }

  try {
    // 1. Exchange authorization code for tokens
    const tokenResponse = await fetch('https://id.magalu.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri
      })
    });

    if (!tokenResponse.ok) {
      const errDetails = await tokenResponse.text();
      return res.status(tokenResponse.status).json({
        error: 'Erro ao trocar código por token no aiqfome.',
        details: errDetails
      });
    }

    const data = await tokenResponse.json();
    const accessToken = data.access_token || data.accessToken;
    const refreshToken = data.refresh_token || data.refreshToken || null;
    const expiresIn = data.expires_in || data.expiresIn || 21600;

    // 2. Save tokens to Supabase using standard REST API
    const supabaseResponse = await fetch(`${process.env.SUPABASE_URL}/rest/v1/integrations?on_conflict=provider`, {
      method: 'POST',
      headers: {
        'apikey': process.env.SUPABASE_SECRET_KEY,
        'Authorization': `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify({
        provider: 'aiqfome',
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: expiresIn,
        updated_at: new Date().toISOString()
      })
    });

    if (!supabaseResponse.ok) {
      const dbErr = await supabaseResponse.text();
      return res.status(500).json({
        error: 'Erro ao salvar credenciais no banco de dados.',
        details: dbErr
      });
    }

    // Redirect merchant back to the frontend integration page
    res.writeHead(302, { Location: 'https://pdv.heso.com.br/integracoes/aiqfome?status=success' }).end();

  } catch (error) {
    return res.status(500).json({
      error: 'Erro interno no servidor.',
      details: error.message
    });
  }
}
