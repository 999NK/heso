<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Credenciais do iFood (Substitua pelas obtidas no portal de desenvolvedores do iFood)
$clientId = 'SEU_IFOOD_CLIENT_ID';
$clientSecret = 'SEU_IFOOD_CLIENT_SECRET';
$redirectUri = 'https://pdv.heso.com.br/api/ifood-callback.php';

// Conexão com o Banco de Dados Supabase (PostgreSQL)
$dbHost = 'db.zzuhlxruynaspdjllvgp.supabase.co';
$dbPort = '5432';
$dbName = 'postgres';
$dbUser = 'postgres';
$dbPass = '1219634360915082003nico';

$code = isset($_GET['code']) ? $_GET['code'] : null;

if (!$code) {
    echo json_encode(['error' => 'Código de autorização ausente.']);
    exit;
}

// 1. Faz a requisição de troca do código pelos tokens no iFood
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://merchant-api.ifood.com.br/v1.0/oauth/token');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'grantType' => 'authorization_code',
    'clientId' => $clientId,
    'clientSecret' => $clientSecret,
    'authorizationCode' => $code,
    'redirectUri' => $redirectUri
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/x-www-form-urlencoded'
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    echo json_encode([
        'error' => 'Erro ao trocar código por token no iFood.',
        'details' => json_decode($response, true),
        'http_code' => $httpCode
    ]);
    exit;
}

$data = json_decode($response, true);
$accessToken = $data['accessToken'];
$refreshToken = isset($data['refreshToken']) ? $data['refreshToken'] : null;
$expiresIn = isset($data['expiresIn']) ? $data['expiresIn'] : 21600;

try {
    // 2. Conecta ao Supabase via PDO PostgreSQL
    $dsn = "pgsql:host=$dbHost;port=$dbPort;dbname=$dbName";
    $pdo = new PDO($dsn, $dbUser, $dbPass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // 3. Salva os tokens na tabela 'integrations'
    $stmt = $pdo->prepare("
        INSERT INTO integrations (provider, access_token, refresh_token, expires_in, updated_at)
        VALUES (:provider, :access_token, :refresh_token, :expires_in, NOW())
        ON CONFLICT (provider) DO UPDATE 
        SET access_token = EXCLUDED.access_token, 
            refresh_token = EXCLUDED.refresh_token, 
            expires_in = EXCLUDED.expires_in,
            updated_at = NOW()
    ");

    $stmt->execute([
        'provider' => 'ifood',
        'access_token' => $accessToken,
        'refresh_token' => $refreshToken,
        'expires_in' => $expiresIn
    ]);

    // Redireciona o lojista de volta para a tela de integração do front com status de sucesso
    header('Location: https://pdv.heso.com.br/integracoes/ifood?status=success');
    exit;

} catch (PDOException $e) {
    echo json_encode([
        'error' => 'Erro ao salvar credenciais no banco de dados.',
        'details' => $e->getMessage()
    ]);
    exit;
}
