<?php
  require 'db.php';
  session_start();

  if ($_SERVER['REQUEST_METHOD'] == 'POST')
  {
      if (isset($_POST['login'])) { //user registering
          require 'login.php';
      }
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Quests List - Connexion</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="assets/images/icons/logo_quest_list.png">
  </head>

  <body>
    <!-- FULL WEBSITE SIGN -->
    <div class="full-website-sign">
      <!-- SECTION SIGN UP -->
      <section class="sign sign-in">
        <!-- TABS SIGN -->
          <div class="tabs-sign-in">
            <div class="sign-up-title sign-title">
              <a href="index.php"><h1>sign up</h1></a>
            </div>
            <div class="sign-in-title sign-title">
              <a href="sign-in.php"><h1>sign in</h1></a>
            </div>
          </div>
        <!-- CONTENT SIGN -->
        <div class="content-sign">
          <form action="sign-in.php" method="post" autocomplete="off">
            <!-- MAIL INPUT -->
            <div class="mail-input sign-input">
                <label for="mail-sign-up">mail</label>
                <input type="text" id="mail-sign-in" name="mail" />
            </div>
            <!-- PASSWORD INPUT -->
            <div class="pass-input sign-input">
                <label for="pass-sign-up">password</label>
                <input type="password" id="pass-sign-in" name="password" />
            </div>
            <!-- SIGN UP BUTTON -->
            <button class="sign-btn" id="sign-in-btn" name="login">Connexion</button>
          </form>
          <p>
            <?php
                if(isset($_SESSION['message']) AND !empty($_SESSION['message'])){
                    echo $_SESSION['message'];
                }
            ?>
          <p>
        </div>
      </section>
    </div>

  <!-- Link to the main script -->
  <script src="assets/js/main.js"></script>
  </body>
</html>
