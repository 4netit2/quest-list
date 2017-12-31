<?php
require 'db.php';

$category = $_POST['postCategory'];
$title = $_POST['postTitle'];
$email = $_POST['postMail'];
$ID = $_POST['postID'];

$query = "INSERT INTO quest (email, category, title, questID, completed) " 
                . "VALUES ('$email', '$category', '$title', '$ID',0)";

$mysqli->query($query);

?>