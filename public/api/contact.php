<?php
  

  require "./PHPMailer/PHPMailerAutoload.php";
 
  // include_once "PHPMailer/Exception.php";
  // Include autoload.php file
  
  // Create object of PHPMailer class
  $mail = new PHPMailer(true);

  $output = '';

  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // try {
      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->SMTPAuth = TRUE;

      // Gmail ID which you want to use as SMTP server
      $mail->Username = 'anuragpal0226@gmail.com';
      // Gmail Password
      $mail->Password = 'anuragpal4554';
      $mail->SMTPSecure = 'tls';
      $mail->Port = 587;

      // Email ID from which you want to send the email
      $mail->setFrom($email,"Futeservices Contact Form");
      // Recipient Email ID where you want to receive emails
      $mail->addAddress("apal895@gmail.com", "Anurag Pal");

      $mail->isHTML(true);
      $mail->Subject = 'Contact Form Submission';
      // $mail->Body = "<h3>Name : $name <br>Email : $email <br>Company : $company <br>Service : $service <br>Message : $message</h3>";
      $content = "<b>This is a Test Email sent via Gmail SMTP Server using PHP mailer class.</b>";
      $mail->MsgHTML($content);
    
      $mail->send();
      $output = '<div class="alert alert-success">
                  <h5>Thankyou! for contacting us, We will get back to you soon!</h5>
                </div>';
    // } catch (Exception $e) {
      // $output = '<div class="alert alert-danger">
      //             <h5>' . $e->getMessage() . '</h5>
      //           </div>';
    // }
  }

?>


