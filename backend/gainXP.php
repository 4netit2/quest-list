<?php 
require 'db.php';
session_start();

$email = $_POST['postMail'];

$queryResult = $mysqli->query("SELECT level,experience,experience_needed FROM users WHERE email='$email'");
$user = $queryResult->fetch_assoc();

$user['experience'] += 50;

if($user['experience'] == $user['experience_needed']){
    $user['experience'] = 0;
    $user['level'] += 1;
    $user['experience_needed'] += 150;
}

$level = $user['level'];
$experience = $user['experience'];
$experience_needed = $user['experience_needed'];

$updateDBquery = "UPDATE users SET level = '$level', experience = '$experience', experience_needed = '$experience_needed' WHERE email = '$email'";
$mysqli->query($updateDBquery);
?>