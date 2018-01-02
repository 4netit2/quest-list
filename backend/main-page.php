<?php
    session_start();
    require 'db.php';

    $email = $_SESSION['mail'];
    $result = $mysqli->query("SELECT * FROM users WHERE email='$email'");
    $user = $result->fetch_assoc();

    $pseudo = $user['pseudo'];

    $xp = ($user['experience'] / $user['experience_needed']) * 100;
    $class = $user['class'];
    $_SESSION["someone"] = 18;

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Quests List - Main Page</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>

    <!-- Style needed for the inner div of the XP bar. Needs to be set here in order to get data from the PHP  -->
    <style>
        .user-xp-bar-placeholder-inner{
            width:<?php echo $xp ?>%;
            height: 100%;
            background-color: #1253ad;
        }
    </style>
  </head>
  <body>
    <!-- OVERLAY -->
    <div class="overlay hidden" id="overlay"></div>
    <!-- FULL WEBSITE MAIN PAGE -->
    <div class="full-website-main-page">
      <!-- MAIN NAV BAR -->
      <nav class="main-nav">
        <!-- Character Pseudo -->
        <div class="character-pseudo">
          <h1><?php echo $pseudo ?></h1>
        </div>
        <!-- Menu Icon -->
        <div class="menu-icon" id="menu-icon">
          <a href="javascript:void(0);">&#9776;</a>
        </div>
      </nav>
      <!-- CONTENT MAIN PAGE -->
      <div class="content-main-page" id="content-main-page">
        <!-- HEADER -->
        <header>
            <div class="completed-quests">
                <h3 class="completed-quests-number">Quests Defeated</h3>
                <button class="completed-quests-number" id="reload-button"><i class="fas fa-sync-alt"></i></button>
                <button class="button-add-quest" id="add-quests-btn">add quest</button>
            </div>
        </header>
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-course">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-course"></div>
                    <h4 class="quest-category-title">Courses</h4>
                </div>
                <!-- <div class="content-quest-group">
                    <div class="quest-check"></div>
                    <div class="content-quest-title-group">
                        <p class="content-quest-title">content quest</p>
                        <div class="content-quest-xp">50 xp</div>
                    </div>
                </div>
                <div class="content-quest-group">
                    <div class="quest-check-crossed">&#10005;</div>
                    <div class="content-quest-title-group">
                        <p class="content-quest-title">content quest</p>
                        <div class="content-quest-xp">50 xp</div>
                        <div class="content-quest-done">
                            <div class="class-item"></div>
                        </div>
                    </div>
                </div>
                <div class="content-quest-group">
                    <div class="quest-check"></div>
                    <div class="content-quest-title-group">
                        <p class="content-quest-title">content quest</p>
                        <div class="content-quest-xp">50 xp</div>
                    </div>
                </div> -->
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-slack">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-slack"></div>
                    <h4 class="quest-category-title">Slack</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-forum">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-forum"></div>
                    <h4 class="quest-category-title">Forum</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-project">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-project"></div>
                    <h4 class="quest-category-title">Projects</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-challenge">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-challenge"></div>
                    <h4 class="quest-category-title">Challenges</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-personal">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-personal"></div>
                    <h4 class="quest-category-title">Personal Life</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-health">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-health"></div>
                    <h4 class="quest-category-title">Health</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-work">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-work"></div>
                    <h4 class="quest-category-title">Work</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
            <!-- Quest Category Group -->
            <div class="quest-category-group hidden" id="category-fun">
                <div class="quest-category-title-group">
                    <div class="quest-category-item category-fun"></div>
                    <h4 class="quest-category-title">Fun</h4>
                </div>
            </div> <!-- END of .quest-category-group -->
      </div> <!-- END CONTENT MAIN PAGE -->

    <!-- CONTENT ADD QUEST PAGE, remove just .hidden to make it visible-->
    <div class="content-add-quest-page hidden" id="content-add-quest-page">
        <div class="popup-close-button" id="close-add-quest-btn"><i class="fas fa-times"></i></div>
        <div class="add-quest-input-group">
            <form action="" onSubmit="return false;">
              <input type="text" id="quest-user-input" placeholder="CREATE NEW QUEST...">
            </form>
            <div class="choose-category-quest" id="add-quest-category">
                <div class="quest-category-item" id="add-quest-item"></div>
                <div class="fas fa-sort-down"></div>
            </div>
            <div class="content-quest-xp">50 xp</div>
            <div class="confirm-add-quest-disable" id="confirm-add-quest" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <!-- When a quest is activate,
        change .content-default-quest-disable by .content-default-quest
        change .content-quest-xp-disable by .content-quest-xp
        change . confirm-add-quest-disable by .confirm-add-quest
        and it needs to be a cross signe while disable instead of the tick
        -->
        <div class="add-quest-content-default-group" id="default-quest-course">
            <div class="content-default-quest-disable">Finish a Udacity lesson</div>
            <div class="quest-category-item category-course"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-course-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-slack">
            <div class="content-default-quest-disable">Participate on a Udacity Slack Channel</div>
            <div class="quest-category-item category-slack"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-slack-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-forum">
            <div class="content-default-quest-disable">Help a fellow student on the Forum</div>
            <div class="quest-category-item category-forum"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-forum-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-project">
            <div class="content-default-quest-disable">Add one feature on a side project</div>
            <div class="quest-category-item category-project"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-project-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-challenge">
            <div class="content-default-quest-disable">Complete a Code Challenge</div>
            <div class="quest-category-item category-challenge"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-challenge-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-personal">
            <div class="content-default-quest-disable">Take time for myself</div>
            <div class="quest-category-item category-personal"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-personal-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-health">
            <div class="content-default-quest-disable">Go for a walk or any activity far from the computer</div>
            <div class="quest-category-item category-health"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-health-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-work">
            <div class="content-default-quest-disable">Do my best at work</div>
            <div class="quest-category-item category-work"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-work-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
        <div class="add-quest-content-default-group" id="default-quest-fun">
            <div class="content-default-quest-disable">Take some fun time with friends of family</div>
            <div class="quest-category-item category-fun"></div>
            <div class="content-quest-xp-disable">50 xp</div>
            <div class="confirm-add-quest-disable" id="default-fun-add" onclick="handleQuest(this.className, this.id);"><i class="fas fa-plus"></i></div>
        </div>
    </div> <!-- END CONTENT ADD QUEST PAGE -->

    <!-- CONTENT MENU PAGE, remove just .hidden to make it visible-->
    <div class="content-menu-page hidden" id="menu-page">
       <div class="menu-header">
       <div></div>
       <div class="character-pseudo">
          <h1><?php echo $pseudo ?></h1>
        </div>
       <div class="popup-close-button" id="close-menu-btn"><i class="fas fa-times"></i></div>
       </div>
       <div class="menu-content">
          <div class="avatar-portrait">
              <img src=<?php echo $user['image'] ?> alt="Avatar" id="main-avatar">
          </div>
          <div class="user-level" id="user-level">Level: <?php echo $user['level'] ?></div>
          <div class="user-xp-group">
              <div class="user-xp-text">xp</div>
              <div class="user-xp-bar-placeholder"><div class="user-xp-bar-placeholder-inner" id="user-xp-inner"></div></div>
          </div>
          <a href="index.php" class="lougout-btn">logout</a>
       </div>

    </div> <!-- END CONTENT MENU PAGE -->

    <!-- CHOOSE CATEGORY POPUP -->
    <div class="choose-category-popup hidden" id="choose-category-popup">
      <div class="choose-category-row">
        <div class="quest-category-item category-course"></div>
        <div class="quest-category-item category-slack"></div>
        <div class="quest-category-item category-forum"></div>
      </div>
      <div class="choose-category-row">
        <div class="quest-category-item category-project"></div>
        <div class="quest-category-item category-challenge"></div>
        <div class="quest-category-item category-personal"></div>
      </div>
      <div class="choose-category-row">
        <div class="quest-category-item category-health"></div>
        <div class="quest-category-item category-work"></div>
        <div class="quest-category-item category-fun"></div>
      </div>
    </div>
    <input type="text" id="session_name" style="display: none" value=<?php echo $_SESSION['mail'] ?>>
    <input type="text" id="user_class" style="display: none" value=<?php echo $class ?>>
    </div> <!-- END FULL WEBSITE MAIN PAGE -->

  <!-- Link to the main script -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="assets/js/create-character.js"></script>
  <script src="assets/js/main.js"></script>
  </body>
</html>
