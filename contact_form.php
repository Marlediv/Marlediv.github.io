<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$name = htmlspecialchars(trim($data['name']));
$email = htmlspecialchars(trim($data['email']));
$message = htmlspecialchars(trim($data['message']));

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.office365.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'deine.email@outlook.com'; // Ersetze dies durch deine Outlook-Adresse
    $mail->Password = 'dein_password';           // Ersetze dies durch dein Outlook-Passwort
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Empfänger
    $mail->setFrom('deine.email@outlook.com', 'Webmaster');
    $mail->addAddress('empfaenger.email@example.com'); // Ersetze dies durch die Empfänger-E-Mail-Adresse

    // Inhalt
    $mail->isHTML(false);
    $mail->Subject = 'Neue Nachricht von deiner Website';
    $mail->Body    = "Name: $name\nEmail: $email\n\nNachricht:\n$message";

    $mail->send();
    echo json_encode(['status' => 'success']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}
?>
