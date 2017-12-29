<?php

require 'db.php';

$result = $mysqli->query("SELECT * FROM users WHERE email='abcd'");
$user = $result->fetch_assoc();

$percent = ($user['experience'] / 200) * 100;


/*$total = rand(1, 5000);
$current = rand(1, $total);
$percent = round(($current/$total) * 100);*/

echo "<p>$ is $percent% of 200</p>";

?>

<style>
.outter{
    height: 25px;
    width: 500px;
    border: solid 1px #000;
}
.inner{
    height: 25px;
    width: <?php echo $percent ?>%;
    border-right: solid 1px #000;
    background-color: #c1f;
}
</style>
<div class="outter">
    <div class="inner"></div>
</div>