<?php
	include("config.php");
	include 'mailtest/library.php'; // include the library file
	include "mailtest/classes/class.phpmailer.php"; // include the class name		
	if(isset($_POST['submit']))
		{
			
			$first_name=$_POST['first_name'];
			$last_name=$_POST['last_name'];
			$mobile=$_POST['mobile'];
			$email=$_POST['email'];
			$password=$_POST['password'];
			$usertype="Story Supplier";
			$visitor_email="info@thepenpower";
			if($first_name!="")
			{
			$query=mysql_query("Insert into registration(first_name,last_name,mobile,email,password,usertype,user_online)
			values('$first_name','$last_name','$mobile','$email','$password','$usertype',0)")or die(mysql_error());
					
					$mail	= new PHPMailer; // call the class 
					$mail->IsSMTP(); 
					$mail->Host = "mail.thepenpower.com"; //Hostname of the mail server
					$mail->Port = "25"; //Port of the SMTP like to be 25, 80, 465 or 587
					$mail->SMTPAuth = true; //Whether to use SMTP authentication
					$mail->Username = "support@thepenpower.com"; //Username for SMTP authentication any valid email created in your domain
					$mail->Password = "Support@123"; //Password for SMTP authentication
					$mail->AddReplyTo("support@thepenpower.com", "Reply name"); //reply-to address
					$mail->SetFrom("support@thepenpower.com", "Penpower Enquiry"); //From address of the mail
					// put your while loop here like below,
					$mail->Subject = "Welcome to the Penpower family."; //Subject od your mail
					$mail->AddAddress($email, "Penpower Enquiry"); //To address who will receive this email
					$mail->MsgHTML("<b>Hi ".$first_name.",</b><br/><br/>
									Welcome to the Penpower family.<br/> I am extremely delighted and grateful that you have joined us in our mission to democratize the world of writing. <br/>
									So just <a href='thepenpower.com/login.php'>Login</a> and start sharing your stories with the world.<br/><br/>
									Happy Storytelling!<br/>
									Sharmin Ali<br/>
									Founder, thepenpower.com
"); //Put your body of the message you can place html code here
					$send = $mail->Send(); //Send the mails
					if($send){
						header("location:login.php");
					}
					else{
						echo '<center><h3 style="color:#FF3300;">Mail error: </h3></center>'.$mail->ErrorInfo;
					}
			}
		}		
?>