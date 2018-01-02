<?php
require 'db.php';

$email = $_POST['postMail'];
$query = "SELECT count(*) FROM quest WHERE email = '$email'";

$result = $mysqli->query($query);
$count = $result->fetch_assoc();

echo $count['count(*)'];
?>