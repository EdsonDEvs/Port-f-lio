<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
    // Validação
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, preencha o formulário corretamente.";
        exit;
    }
    
    // Configuração do email
    $recipient = "seu-email@exemplo.com";
    $subject = "Novo contato de $name";
    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensagem:\n$message\n";
    $headers = "From: $name <$email>";
    
    // Envia o email
    if (mail($recipient, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "Obrigado! Sua mensagem foi enviada.";
    } else {
        http_response_code(500);
        echo "Ops! Algo deu errado e não pudemos enviar sua mensagem.";
    }
} else {
    http_response_code(403);
    echo "Houve um problema com seu envio. Tente novamente.";
}
?>