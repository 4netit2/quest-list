<?php
// Escape all $_POST variables to protect against SQL injections
$email = $mysqli->escape_string($_POST['mail']);
$password = $mysqli->escape_string(password_hash($_POST['password'], PASSWORD_BCRYPT));
$hash = $mysqli->escape_string(md5(rand(0,1000)));
      
// Check if user with that email already exists
$result = $mysqli->query("SELECT * FROM users WHERE email='$email'") or die($mysqli->error());

// We know user email exists if the rows returned are more than 0
if ( $result->num_rows > 0 ) {
    $_SESSION['message'] = 'Email already exists. Use a different one!';  
}
else { // Email doesn't already exist in a database, proceed...

    // active is 0 by DEFAULT (no need to include it here)
    $sql = "INSERT INTO users (email, password, hash, experience, level, experience_needed, existing_character) " 
            . "VALUES ('$email','$password', '$hash', 0, 1, 200, 0)";

    // Add user to the database
    if ( $mysqli->query($sql) ){

        $_SESSION['mail'] = $email;
        $_SESSION['logged_in'] = true;

        header("location: create-character.php");
        unset($_SESSION['message']);
        // Send registration confirmation link (verify.php)
        /*$to      = $email;
        $subject = 'Account Verification ( clevertechie.com )';
        $message_body = '
        Hello '.$first_name.',

        Thank you for signing up!

        Please click this link to activate your account:

        http://localhost/login-system/verify.php?email='.$email.'&hash='.$hash;  

        mail( $to, $subject, $message_body );*/
    }
    else {
        $_SESSION['message'] = 'Registration failed. Try again!';
    }

}