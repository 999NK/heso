<?php
/**
 * Webhook do iFood — Recebe notificações de novos pedidos e eventos.
 * 
 * O iFood envia um POST para esta URL sempre que há um evento 
 * (novo pedido, pedido cancelado, status atualizado, etc).
 * 
 * URL para configurar no painel do iFood:
 * https://pdv.heso.com.br/api/ifood-webhook.php
 */

header('Content-Type: application/json');

// Carrega variáveis de ambiente do arquivo .env
$envPaths = [
    __DIR__ . '/../../.env',
    __DIR__ . '/../.env',
    dirname($_SERVER['DOCUMENT_ROOT']) . '/.env',
];

$envLoaded = false;
foreach ($envPaths as $envPath) {
    if (file_exists($envPath)) {
        $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            if (strpos($line, '=') === false) continue;
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value, " \t\n\r\0\x0B\"'");
            putenv("$key=$value");
        }
        $envLoaded = true;
        break;
    }
}

// Conexão com o Banco de Dados Supabase
$dbHost = getenv('SUPABASE_DB_HOST');
$dbPort = getenv('SUPABASE_DB_PORT') ?: '5432';
$dbName = getenv('SUPABASE_DB_NAME') ?: 'postgres';
$dbUser = getenv('SUPABASE_DB_USER') ?: 'postgres';
$dbPass = getenv('SUPABASE_DB_PASS');

// Chave secreta de validação do webhook do iFood (do .env)
$webhookSecret = getenv('IFOOD_WEBHOOK_SECRET');

// ========================================
// Verificação de método HTTP
// ========================================
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Teste de conexão do iFood — retorna 200 OK
    http_response_code(200);
    echo json_encode(['status' => 'ok', 'message' => 'Webhook HESO PDV ativo.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido.']);
    exit;
}

// ========================================
// Leitura e Validação da Assinatura do iFood
// ========================================
$rawBody = file_get_contents('php://input');

// 1. Captura o cabeçalho X-iFood-Signature
$headers = getallheaders();
$receivedSignature = null;
foreach ($headers as $name => $value) {
    if (strtolower($name) === 'x-ifood-signature') {
        $receivedSignature = $value;
        break;
    }
}

// 2. Valida se o webhookSecret está configurado e se a assinatura foi recebida
if ($webhookSecret) {
    if (!$receivedSignature) {
        http_response_code(401);
        echo json_encode(['error' => 'Assinatura X-iFood-Signature ausente.']);
        exit;
    }

    // 3. Calcula o hash HMAC-SHA256 esperado usando o corpo bruto e o segredo do webhook
    $expectedSignature = hash_hmac('sha256', $rawBody, $webhookSecret);

    // 4. Compara com segurança temporal constante (evita timing attacks)
    if (!hash_equals($expectedSignature, $receivedSignature)) {
        http_response_code(401);
        echo json_encode([
            'error' => 'Assinatura inválida. Acesso não autorizado.',
            'debug' => 'Opcional: Garanta que o IFOOD_WEBHOOK_SECRET do seu arquivo .env corresponde ao do portal do desenvolvedor do iFood.'
        ]);
        exit;
    }
}

// ========================================
// Leitura do payload do evento
// ========================================
$events = json_decode($rawBody, true);

if (!$events) {
    http_response_code(400);
    echo json_encode(['error' => 'Payload inválido ou vazio.']);
    exit;
}

// O iFood pode enviar um array de eventos ou um evento único
if (isset($events['id'])) {
    $events = [$events]; // Normaliza para array
}

try {
    $dsn = "pgsql:host=$dbHost;port=$dbPort;dbname=$dbName";
    $pdo = new PDO($dsn, $dbUser, $dbPass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // Salva cada evento na tabela 'webhook_events'
    $stmt = $pdo->prepare("
        INSERT INTO webhook_events (provider, event_id, event_type, order_id, payload, received_at)
        VALUES (:provider, :event_id, :event_type, :order_id, :payload, NOW())
        ON CONFLICT (event_id) DO NOTHING
    ");

    foreach ($events as $event) {
        $eventId   = isset($event['id']) ? $event['id'] : uniqid('evt_');
        $eventType = isset($event['code']) ? $event['code'] : (isset($event['fullCode']) ? $event['fullCode'] : 'UNKNOWN');
        $orderId   = isset($event['orderId']) ? $event['orderId'] : null;

        $stmt->execute([
            'provider'   => 'ifood',
            'event_id'   => $eventId,
            'event_type' => $eventType,
            'order_id'   => $orderId,
            'payload'    => json_encode($event)
        ]);
    }

    // Retorna 200 OK para o iFood confirmar recebimento
    http_response_code(200);
    echo json_encode(['status' => 'ok', 'events_received' => count($events)]);

} catch (PDOException $e) {
    // Retorna 500 para o iFood tentar novamente
    http_response_code(500);
    echo json_encode([
        'error'   => 'Erro ao processar evento.',
        'details' => $e->getMessage()
    ]);
}
