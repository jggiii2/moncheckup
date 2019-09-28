<?php

/* AUTHOR: SYLVESTER KLIROWSKI */

 // Build body
 $body = $_POST["first_name"]." ";
 $body .= $_POST["last_name"]."<br />";
 $body .= $_POST["email"]."<br />";
 $body .= $_POST["phone"]."<br />";
 $body .= $_POST["ziptown"]."<br />";
 $body .= $_POST["family"]."<br />";
 $body .= $_POST["physicianPhone"]."<br />";
 $body .= $_POST["medi24"]."<br />";
 $body .= $_POST["insuranceReduce"]."<br />";
 $body .= $_POST["disturbPhone"];

 // email subject
 $subject = "MonCheckUp Registration";

 // Always set content-type when sending HTML email
 $headers = "MIME-Version: 1.0" . "\r\n";
 $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

 // More headers
 $headers .= 'From: <my.checkup.suisse@gmail.com>' . "\r\n";

 // send email
 mail('my.checkup.suisse@gmail.com', $subject, $body, $headers);

?>
