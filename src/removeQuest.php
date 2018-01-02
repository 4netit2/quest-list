<?php
require 'db.php';

$title = $_POST['postTitle'];
$email = $_POST['postMail'];
$ID = $_POST['postID'];

$query = "";

if($ID != 0){
    $query = "DELETE FROM quest WHERE email = '$email' AND questID = '$ID'";
}else{
    $query = "DELETE FROM quest WHERE email = '$email' AND title = '$title'";
}


$mysqli->query($query);

?>