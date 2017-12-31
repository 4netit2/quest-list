<?php
/* User login process, checks if user exists and password is correct */

// Escape email to protect against SQL injections
$email = $mysqli->escape_string($_POST['mail']);
$result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

if ( $result->num_rows == 0 ){ // User doesn't exist
    $_SESSION['message'] = "User with that email doesn't exist!";
}
else { // User exists
    $user = $result->fetch_assoc();

    if (password_verify($_POST['password'], $user['password'])) {
        
        $_SESSION['mail'] = $user['email'];      
        // This is how we'll know the user is logged in
        $_SESSION['logged_in'] = true;

        unset($_SESSION['message']);

        if($user['existing_character'] == 1){
            header("location: main-page.php");
        }else{
            header("location: create-character.php");
        }
    }
    else {
        $_SESSION['message'] = "You have entered a wrong password, try again!";
    }
}

