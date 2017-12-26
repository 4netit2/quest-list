<?php
/* Database connection settings */
$server = '';
$username = '';
$password = '';
$database_name = 'users';
$mysqli = new mysqli($server,$username,$password,$database_name) or die($mysqli->error);

