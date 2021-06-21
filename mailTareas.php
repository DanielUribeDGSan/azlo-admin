<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$pagina = $_POST['pagina'];
// $nombre = 'Daniel Uribe';
// $email = 'daniel.dg77.dg77@gmail.com';

require './PHPMailer/phpmailer/PHPMailer.php';
require './PHPMailer/phpmailer/SMTP.php';
require './PHPMailer/phpmailer/Exception.php';
require './PHPMailer/phpmailer/OAuth.php';

//Load Composer's autoloader
require 'vendor/autoload.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
  //Server settings
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
  $mail->Username   = 'daniel.uribe.garcia07@gmail.com';                     //SMTP username
  $mail->Password   = 'Chivas1314_';                               //SMTP password
  $mail->SMTPSecure = 'tls';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
  $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

  //Recipients
  $mail->setFrom('daniel.uribe.garcia07@gmail.com', 'Azlo Admin');
  $mail->addAddress($email, $nombre);     //Add a recipient               

  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = 'Te han asignado una nueva tarea';
  $mail->Body    = '
';


  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
