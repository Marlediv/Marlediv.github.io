<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header('Content-Type: application/json');

// Eingabedaten
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$name = htmlspecialchars(trim($data['name']));
$email = htmlspecialchars(trim($data['email']));
$message = htmlspecialchars(trim($data['message']));

// Zusätzliche Validierung
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Ungültige E-Mail-Adresse.']);
    exit;
}

if (empty($name) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'Alle Felder sind erforderlich.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // SMTP-Servereinstellungen
    $mail->isSMTP();
    $mail->Host = 'smtp.office365.com';
    $mail->SMTPAuth = true;
    $mail->Username = getenv('MAIL_USERNAME'); // Sichere E-Mail aus Umgebungsvariable
    $mail->Password = getenv('MAIL_PASSWORD'); // Sichere Passwort aus Umgebungsvariable
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Empfänger
    $mail->setFrom($mail->Username, 'Webmaster');
    $mail->addAddress(getenv('MAIL_RECIPIENT')); // Empfänger aus Umgebungsvariable

    // E-Mail-Inhalt
    $mail->isHTML(false);
    $mail->Subject = 'Neue Nachricht von deiner Website';
    $mail->Body    = "Name: $name\nEmail: $email\n\nNachricht:\n$message";

    // E-Mail senden
    $mail->send();
    echo json_encode(['status' => 'success']);
    
} catch (Exception $e) {
    // Fehlerprotokollierung
    file_put_contents('mail_errors.log', $mail->ErrorInfo, FILE_APPEND);
    echo json_encode(['status' => 'error', 'message' => 'Es gab einen Fehler beim Senden der Nachricht.']);
}
?>
