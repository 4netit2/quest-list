<?php 
// Creating the character with the pseudo and avatar
$avatar_name = $mysqli->escape_string($_POST['avatar_name']);
$avatar_url = $mysqli->escape_string($_POST['avatar_url']);
$class = $mysqli->escape_string($_POST['class']);
$pseudo = $mysqli->escape_string($_POST['pseudo']);
$email = $_SESSION['mail'];

$query = "UPDATE users
          SET avatar_name = '$avatar_name', image = '$avatar_url', class = '$class', pseudo = '$pseudo'
          WHERE email = '$email'";

$result = $mysqli->query($query);

$_SESSION['avatar_name'] = $avatar_name;
$_SESSION['avatar_url'] = $avatar_url;
$_SESSION['class'] = $class;
$_SESSION['pseudo'] = $pseudo;

//header("location: .php");
?>