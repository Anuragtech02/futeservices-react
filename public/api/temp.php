<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST['submit']) {

  http_response_code(200);

  $to = "apal895@gmail.com";
  $secondTo = "anuragpal0226@gmail.com"
  $from = $_POST['email'];
  $name = $_POST['name'];
  $company = $_POST['company'];
  $service = $_POST['service'];
  $subject = "Quote Enquiry | Futeservices";
  $subject2 = "Quote Enquiry | Futeservices";

  $message = "Name : " . $name . "\nEmail : " . $_POST['email'] . "\Company : " . $_POST['company'] . "\nService : " . $_POST['service'] . "\n\nMessage : " . $_POST['message'];
  // $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";
  $headers .= "From: <" . $from . ">";

  // $headers = "From:" . $from;
  // $headers2 = "From:" . $to;

  // $headers .= "Reply-To: The Sender " . $_POST['email'] . "\r\n";
  // $headers .= "Return-Path: The Sender " . $_POST['email'] . "\r\n";
  // $headers .= "From: The Sender " . $_POST['email'] . "\r\n";
  // $headers .= "Organization: Vflux Studio\r\n";
  // $headers .= "MIME-Version: 1.0\r\n";
  // $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  // $headers .= "X-Priority: 3\r\n";
  // $headers .= "X-Mailer: PHP" . phpversion() . "\r\n";

  // $headers2 .= "Reply-To: The Sender vfluxstudio@gmail.com\r\n";
  // $headers2 .= "Return-Path: The Sender vfluxstudio@gmail.com\r\n";
  // $headers2 .= "From: The Sender vfluxstudio@gmail.com\r\n";
  // $headers2 .= "Organization: Vflux Studio\r\n";
  // $headers2 .= "MIME-Version: 1.0\r\n";
  // $headers2 .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  // $headers2 .= "X-Priority: 3\r\n";
  // $headers2 .= "X-Mailer: PHP" . phpversion() . "\r\n";

  mail($to, $subject, $message, $headers);
  // mail($secondTo, $subject, $message, $headers);

  echo json_encode(array(
    "sent" => true
  ));
  // mail($from, $subject2, $message2, $headers2);
  echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
} else {
  echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}