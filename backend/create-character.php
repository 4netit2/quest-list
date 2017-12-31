<?php
require 'db.php';
session_start();

if(!isset($_SESSION['logged_in'])){
  header("location: sign-in.php");
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{    
    if (isset($_POST['create'])) { //user registering 
        require 'create.php';  
    }
    elseif(isset($_POST['logout'])){
        require 'logout.php';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Quests List - Create Character</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800" rel="stylesheet">
  </head>
  <body>
    <!-- FULL WEBSITE CHARACTER -->
    <div class="full-website-character">
      <!-- MAIN NAV BAR -->
      <nav class="main-nav">
        <!-- Character Pseudo -->
        <div class="character-pseudo">
          <h1>My Pseudo</h1>
        </div>
        <!-- Menu Icon -->
        <div class="menu-icon">
          <a href="javascript:void(0);">&#9776;</a>
        </div>
      </nav>
      <!-- CONTENT CHARACTER -->
      <div class="content-character">
        <!-- avatar choice -->
        <div class="avatar-choice" id="avatar-choice">
          <h2>Avatar</h2>
          <div class="avatar-item" id="avatar-ape"></div>
          <div class="avatar-item" id="avatar-dragon"></div>
          <div class="avatar-item" id="avatar-elf-f"></div>
          <div class="avatar-item" id="avatar-human-f"></div>
          <div class="avatar-item" id="avatar-orc-f"></div>
          <div class="avatar-item" id="avatar-elf-m"></div>
          <div class="avatar-item" id="avatar-human-m"></div>
          <div class="avatar-item" id="avatar-orc-m"></div>
          <div class="avatar-item" id="avatar-panda"></div>
          <div class="avatar-item" id="avatar-unicorn"></div>
        </div>
        <!-- character customization -->
        <main class="character-customization">
          <form action="create-character.php" method="post">
            <input type="text" id="avatar-name" name="avatar_name" style="display: none"/>
            <input type="text" id="avatar-url" name="avatar_url" style="display: none"/>
            <input type="text" id="class-name" name="class" style="display: none"/>
           
            <div class="avatar-portrait">
              <img src="assets/images/avatars/todo_ape.png" alt="Avatar" id="main-avatar">
            </div>
            <div class="pseudo-user">
                <input type="text" id="pseudo-user-input" name="pseudo" placeholder="MY PSEUDO">
            </div>
            <div class="character-creation-btns" id="character-creation">
              <button id="back-character" class="character-btn-back" name="logout">Back</button>
              <button id="create-character-ok" class="character-btn-create" name="create">Create Character</button>
            </div>
          </form>
        </main>
        <!-- class choice -->
        <div class="class-choice" id="class-choice">
          <h2>Class</h2>
          <div class="class-item" id="class-mage"></div>
          <div class="class-item" id="class-rogue"></div>
          <div class="class-item" id="class-warrior"></div>
        </div>
      </div>
    </div> <!-- FULL WEBSITE CHARACTER -->

  <!-- Link to the main script -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="assets/js/create-character.js"></script>
  </body>
</html>
