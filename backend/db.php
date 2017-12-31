<?php
/* Database connection settings */
/*$server = '127.0.0.1';
$username = 'maevacongznguyen';
$password = 'QuestList2018';
$database_name = 'maevacongznguyen';
$mysqli = new mysqli($server,$username,$password,$database_name) or die($mysqli->error);*/

$server = 'localhost';
$username = 'root';
$password = '';
$database_name = 'users';
$mysqli = new mysqli($server,$username,$password,$database_name) or die($mysqli->error);

