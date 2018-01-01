// VARIABLES
const ADD_QUEST_BTN = document.getElementById('add-quests-btn');
const CONTENT_ADD_QUEST_PAGE = document.getElementById('content-add-quest-page');
const CLOSE_ADD_QUEST_BTN = document.getElementById('close-add-quest-btn');
const MENU_ICON = document.getElementById('menu-icon');
const MENU_PAGE = document.getElementById('menu-page');
const CLOSE_MENU_BTN = document.getElementById('close-menu-btn');
const ADD_QUEST_CATEGORY = document.getElementById('add-quest-category');
const CHOOSE_CATEGORY_POPUP = document.getElementById('choose-category-popup');
const ADD_QUEST_ITEM = document.getElementById('add-quest-item');
const OVERLAY = document.getElementById('overlay');
const H1_ELT_MENU_BAR = document.querySelector('.full-website-main-page h1');
const H1_ELT_MENU_PAGE = document.querySelector('.content-menu-page h1');
const CONTENT_MAIN_PAGE = document.getElementById('content-main-page');
const H3_ELT = document.querySelector('h3');
const RELOAD_BUTTON = document.getElementById('reload-button');
const CONFIRM_ADD_QUEST = document.getElementById('confirm-add-quest');
const QUEST_USER_INPUT = document.getElementById('quest-user-input');

const QUESTS_GROUP_COURSE = document.getElementById('category-course');
const QUESTS_GROUP_SLACK = document.getElementById('category-slack');
const QUESTS_GROUP_FORUM = document.getElementById('category-forum');
const QUESTS_GROUP_PROJECT = document.getElementById('category-project');
const QUESTS_GROUP_CHALLENGE = document.getElementById('category-challenge');
const QUESTS_GROUP_PERSONAL = document.getElementById('category-personal');
const QUESTS_GROUP_HEALTH = document.getElementById('category-health');
const QUESTS_GROUP_WORK = document.getElementById('category-work');
const QUESTS_GROUP_FUN = document.getElementById('category-fun');

const DEFAULT_COURSE_ADD = document.getElementById('default-course-add');
const DEFAULT_SLACK_ADD = document.getElementById('default-slack-add');
const DEFAULT_FORUM_ADD = document.getElementById('default-forum-add');
const DEFAULT_PROJECT_ADD = document.getElementById('default-project-add');
const DEFAULT_CHALLENGE_ADD = document.getElementById('default-challenge-add');
const DEFAULT_PERSONAL_ADD = document.getElementById('default-personal-add');
const DEFAULT_HEALTH_ADD = document.getElementById('default-health-add');
const DEFAULT_WORK_ADD = document.getElementById('default-work-add');
const DEFAULT_FUN_ADD = document.getElementById('default-fun-add');

const DEFAULT_QUEST_COURSE = document.getElementById('default-quest-course');
const DEFAULT_QUEST_SLACK = document.getElementById('default-quest-slack');
const DEFAULT_QUEST_FORUM = document.getElementById('default-quest-forum');
const DEFAULT_QUEST_PROJECT = document.getElementById('default-quest-project');
const DEFAULT_QUEST_CHALLENGE = document.getElementById('default-quest-challenge');
const DEFAULT_QUEST_PERSONAL = document.getElementById('default-quest-personal');
const DEFAULT_QUEST_HEALTH = document.getElementById('default-quest-health');
const DEFAULT_QUEST_WORK = document.getElementById('default-quest-work');
const DEFAULT_QUEST_FUN = document.getElementById('default-quest-fun');


let questsToDo = 0;
let questsDefeated = 0;
let saveCategory = 'category-fun';
let uniqueQuestNumber = '1';

let mail = document.getElementById("session_name").value;
let questCount;
$.post('findQuestCount.php', {postMail: mail}, function(data){
  questCount = data;
});
let customQuestCategory = "fun";
// Rename the menu bar and page with user pseudo
/*H1_ELT_MENU_BAR.textContent = character.pseudo;
H1_ELT_MENU_PAGE.textContent = character.pseudo;*/

// Open add quest
ADD_QUEST_BTN.addEventListener('click', function(event) {
  CONTENT_ADD_QUEST_PAGE.className = 'content-add-quest-page';
  OVERLAY.className = 'overlay';
});

// Close add quests
CLOSE_ADD_QUEST_BTN.addEventListener('click', function(event) {
  CONTENT_ADD_QUEST_PAGE.className = 'content-add-quest-page hidden';
  OVERLAY.className = 'overlay hidden';
});

// Open menu
MENU_ICON.addEventListener('click', function(event) {
  MENU_PAGE.className = 'content-menu-page';
  OVERLAY.className = 'overlay';
});

// Close menu
CLOSE_MENU_BTN.addEventListener('click', function(event) {
    MENU_PAGE.className = 'content-menu-page hidden';
    OVERLAY.className = 'overlay hidden';
});

// Open Category
ADD_QUEST_CATEGORY.addEventListener('click', function(event) {
  CHOOSE_CATEGORY_POPUP.className = 'choose-category-popup';
});

// Reload script
RELOAD_BUTTON.addEventListener('click', function(event) {
  location.reload();
});


// Add quest page
let quests = {
  questContent: '',
  questCategory: 'category-fun',
  completed: false,
  xp: 50,
  debugQuest: function() {
    console.log(this.questContent);
    console.log(this.questCategory);
  }
};

// Manage quests
let questManagement = {
  addQuest: function() {
    CONFIRM_ADD_QUEST.addEventListener('click', function(event) {
      if (QUEST_USER_INPUT.value != '') {
        QUEST_USER_INPUT.style.borderColor = '#97928e';
        quests.questCategory = saveCategory;
        // debugger;
        quests.questContent = QUEST_USER_INPUT.value;
        let questElement = document.createElement('div');
        let questElementNumber = document.createElement('span');
        let questElementContent = document.createElement('div');
        let questElementCategory = document.createElement('div');
        let questElementXP = document.createElement('div');
        let questElementAdd = document.createElement('div');
        let questElementAddIcon = document.createElement('i');
        let overlayIcon = document.createElement('div');

        questElement.className = 'add-quest-content-default-group';
        questElementNumber.className = uniqueQuestNumber;
        questElementContent.className = 'content-default-quest';
        questElementContent.textContent = quests.questContent;
        questElementCategory.className = 'quest-category-item ' + quests.questCategory;
        questElementXP.className = 'content-quest-xp';
        questElementXP.textContent = '50xp';
        questElementAdd.className = 'confirm-add-quest custom-quest';
        questElementAdd.id = questCount;
        questElementAdd.setAttribute("onclick", "handleQuest(this.className, this.id);");
        questElementAddIcon.className= 'fas fa-check';
        questElementAdd.appendChild(questElementAddIcon);
        overlayIcon.className = 'overlay-icon';
        questElementAdd.appendChild(overlayIcon);

        CONTENT_ADD_QUEST_PAGE.insertBefore(questElement, DEFAULT_QUEST_COURSE);
        questElement.appendChild(questElementNumber);
        questElement.appendChild(questElementContent);
        questElement.appendChild(questElementCategory);
        questElement.appendChild(questElementXP);
        questElement.appendChild(questElementAdd);

        questManagement.createQuest();
        questCount++;
        quests.debugQuest();
        QUEST_USER_INPUT.value = '';
      } else {
        QUEST_USER_INPUT.style.borderColor = 'red';
      }

      event.preventDefault();
    });
  },
  deleteCustomQuest: function() {
    CONTENT_ADD_QUEST_PAGE.addEventListener('click', function(event) {
      let elementClicked = event.target;
      let questAdded = document.getElementsByClassName('quest-added');
      let questCategoryGroup = document.getElementsByClassName('quest-category-group');

      if (elementClicked.className === 'overlay-icon') {
        let numberToCompare = elementClicked.parentNode.parentNode.children[0];
        for (let i = 0; i < questAdded.length; i++) {
          if (questAdded[i].children[1].children[2].className === 'content-quest-done') {
            questsDefeated--;
          }
          if (questAdded[i].id === numberToCompare.className) {
            quests.questContent = elementClicked.parentNode.parentNode.children[0].textContent;
            elementClicked.parentNode.parentNode.remove();
            questAdded[i].remove();
          }
        }
        quests.debugQuest();
        questsToDo -= 1;
        H3_ELT.textContent = 'Quests Defeated ' + questsDefeated + '/' + questsToDo;
      }

      for (let j = 0; j < questCategoryGroup.length; j++) {
        if (questCategoryGroup[j].children.length < 2) {
          questCategoryGroup[j].className = 'quest-category-group hidden';
        }
      }
    });
  },
  manageDefaultQuest: function() {
    let defaultQuestRemove = document.createElement('i');
    let defaultQuestAdd = document.createElement('i');

    DEFAULT_COURSE_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_COURSE_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Finish a Udacity lesson';
        quests.questCategory = 'category-course';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_COURSE.appendChild(defaultQuestNumber);
        DEFAULT_COURSE_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_COURSE.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_COURSE.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_COURSE_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_COURSE_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_COURSE.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_COURSE.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Finish a Udacity lesson';
        quests.questCategory = 'category-course';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_SLACK_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_SLACK_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Participate on a Udacity Slack Channel';
        quests.questCategory = 'category-slack';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_SLACK.appendChild(defaultQuestNumber);
        DEFAULT_SLACK_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_SLACK.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_SLACK.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_SLACK_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_SLACK_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_SLACK.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_SLACK.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Participate on a Udacity Slack Channel';
        quests.questCategory = 'category-slack';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_FORUM_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_FORUM_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Help a fellow student on the Forum';
        quests.questCategory = 'category-forum';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_FORUM.appendChild(defaultQuestNumber);
        DEFAULT_FORUM_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_FORUM.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_FORUM.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_FORUM_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_FORUM_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_FORUM.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_FORUM.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Help a fellow student on the Forum';
        quests.questCategory = 'category-forum';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_PROJECT_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_PROJECT_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Add one feature on a side project';
        quests.questCategory = 'category-project';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_PROJECT.appendChild(defaultQuestNumber);
        DEFAULT_PROJECT_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_PROJECT.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_PROJECT.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_PROJECT_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_PROJECT_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_PROJECT.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_PROJECT.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Add one feature on a side project';
        quests.questCategory = 'category-project';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_CHALLENGE_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_CHALLENGE_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Complete a Code Challenge';
        quests.questCategory = 'category-challenge';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_CHALLENGE.appendChild(defaultQuestNumber);
        DEFAULT_CHALLENGE_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_CHALLENGE.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_CHALLENGE.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_CHALLENGE_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_CHALLENGE_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_CHALLENGE.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_CHALLENGE.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Complete a Code Challenge';
        quests.questCategory = 'category-challenge';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_PERSONAL_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_PERSONAL_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Take time for myself';
        quests.questCategory = 'category-personal';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_PERSONAL.appendChild(defaultQuestNumber);
        DEFAULT_PERSONAL_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_PERSONAL.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_PERSONAL.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_PERSONAL_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_PERSONAL_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_PERSONAL.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_PERSONAL.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Take time for myself';
        quests.questCategory = 'category-personal';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_HEALTH_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_HEALTH_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Go for a walk or any activity far from the computer';
        quests.questCategory = 'category-health';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_HEALTH.appendChild(defaultQuestNumber);
        DEFAULT_HEALTH_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_HEALTH.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_HEALTH.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_HEALTH_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_HEALTH_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_HEALTH.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_HEALTH.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Go for a walk or any activity far from the computer';
        quests.questCategory = 'category-health';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_WORK_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_WORK_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Do my best at work';
        quests.questCategory = 'category-work';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_WORK.appendChild(defaultQuestNumber);
        DEFAULT_WORK_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_WORK.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_WORK.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_WORK_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_WORK_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_WORK.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_WORK.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Do my best at work';
        quests.questCategory = 'category-work';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });

    DEFAULT_FUN_ADD.addEventListener('click', function(event) {
      let defaultQuestNumber = document.createElement('span');
      if (DEFAULT_FUN_ADD.className === 'confirm-add-quest-disable') {
        quests.questContent = 'Take some fun time with friends of family';
        quests.questCategory = 'category-fun';
        this.children[0].remove();
        this.appendChild(defaultQuestRemove);
        defaultQuestRemove.className = 'fas fa-check';
        defaultQuestNumber.className = uniqueQuestNumber;
        DEFAULT_QUEST_FUN.appendChild(defaultQuestNumber);
        DEFAULT_FUN_ADD.className = 'confirm-add-quest';
        DEFAULT_QUEST_FUN.children[0].className = 'content-default-quest';
        DEFAULT_QUEST_FUN.children[2].className = 'content-quest-xp';

        questManagement.createQuest();
        quests.questCategory = 'category-fun';
      } else if (DEFAULT_FUN_ADD.className === 'confirm-add-quest') {
        let numberQuest = this.parentNode.children[4];
        this.children[0].remove();
        this.appendChild(defaultQuestAdd);
        defaultQuestAdd.className = 'fas fa-plus';
        DEFAULT_FUN_ADD.className = 'confirm-add-quest-disable';
        DEFAULT_QUEST_FUN.children[0].className = 'content-default-quest-disable';
        DEFAULT_QUEST_FUN.children[2].className = 'content-quest-xp-disable';

        quests.questContent = 'Take some fun time with friends of family';
        quests.questCategory = 'category-fun';
        console.log(quests.questContent);
        questManagement.deleteQuest(numberQuest.className);
        quests.questCategory = 'category-fun';
        numberQuest.remove();
      }
    });
  },
  changeQuestCategory: function() {
    CHOOSE_CATEGORY_POPUP.addEventListener('click', function(event) {
      let clickedElement = event.target;

      switch(clickedElement.className) {
        case 'quest-category-item category-course':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/courses_45x45.png")';
          quests.questCategory = 'category-course';
          saveCategory = 'category-course';
          customQuestCategory = "course";
        break;
        case 'quest-category-item category-slack':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/Slack_45x45.png")';
          quests.questCategory = 'category-slack';
          saveCategory = 'category-slack';
          customQuestCategory = "slack";
        break;
        case 'quest-category-item category-forum':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/forum_45x45.png")';
          quests.questCategory = 'category-forum';
          saveCategory = 'category-forum';
          customQuestCategory = "forum";
        break;
        case 'quest-category-item category-project':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/project_45x45.png")';
          quests.questCategory = 'category-project';
          saveCategory = 'category-project';
          customQuestCategory = "project";
        break;
        case 'quest-category-item category-challenge':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/challenge_45x45.png")';
          quests.questCategory = 'category-challenge';
          saveCategory = 'category-challenge';
          customQuestCategory = "challenge";
        break;
        case 'quest-category-item category-personal':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/home_45x45.png")';
          quests.questCategory = 'category-personal';
          saveCategory = 'category-personal';
          customQuestCategory = "personal";
        break;
        case 'quest-category-item category-health':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/health_45x45.png")';
          quests.questCategory = 'category-health';
          saveCategory = 'category-health';
          customQuestCategory = "health";
        break;
        case 'quest-category-item category-work':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/work_45x45.png")';
          quests.questCategory = 'category-work';
          saveCategory = 'category-work';
          customQuestCategory = "work";
        break;
        case 'quest-category-item category-fun':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/fun_45x45.png")';
          quests.questCategory = 'category-fun';
          saveCategory = 'category-fun';
        break;
      }
      ADD_QUEST_ITEM.style.backgroundSize = 'cover';
      CHOOSE_CATEGORY_POPUP.className = 'choose-category-popup hidden';
      quests.debugQuest();
    });
  },
  createQuest: function() {
      let contentQuestGroup = document.createElement('div');
      let questCheck = document.createElement('div');
      let contentQuestTitleGroup = document.createElement('div');
      let contentQuestTitle = document.createElement('p');
      let contentQuestXP = document.createElement('div');
      let contentQuestDone = document.createElement('div');
      let classItem = document.createElement('div');

      contentQuestGroup.className = 'content-quest-group quest-added ' + uniqueQuestNumber;
      contentQuestGroup.id = uniqueQuestNumber;
      questCheck.className = 'quest-check';
      questCheck.setAttribute("onclick", "handleQuest(this.className, this.id);");
      contentQuestTitleGroup.className = 'content-quest-title-group';
      contentQuestTitle.className = 'content-quest-title';
      contentQuestTitle.textContent = quests.questContent;
      contentQuestXP.className = 'content-quest-xp';
      contentQuestXP.textContent = '50 xp';
      contentQuestDone.className = 'content-quest-done hidden';
      classItem.className = 'class-item';

      contentQuestDone.appendChild(classItem);
      contentQuestTitleGroup.appendChild(contentQuestTitle);
      contentQuestTitleGroup.appendChild(contentQuestXP);
      contentQuestTitleGroup.appendChild(contentQuestDone);
      contentQuestGroup.appendChild(questCheck);
      contentQuestGroup.appendChild(contentQuestTitleGroup);

      switch(quests.questCategory) {
        case 'category-course':
          QUESTS_GROUP_COURSE.appendChild(contentQuestGroup);
          QUESTS_GROUP_COURSE.className = 'quest-category-group';
        break;
        case 'category-slack':
          QUESTS_GROUP_SLACK.appendChild(contentQuestGroup);
          QUESTS_GROUP_SLACK.className = 'quest-category-group';
        break;
        case 'category-forum':
          QUESTS_GROUP_FORUM.appendChild(contentQuestGroup);
          QUESTS_GROUP_FORUM.className = 'quest-category-group';
        break;
        case 'category-project':
          QUESTS_GROUP_PROJECT.appendChild(contentQuestGroup);
          QUESTS_GROUP_PROJECT.className = 'quest-category-group';
        break;
        case 'category-challenge':
          QUESTS_GROUP_CHALLENGE.appendChild(contentQuestGroup);
          QUESTS_GROUP_CHALLENGE.className = 'quest-category-group';
        break;
        case 'category-personal':
          QUESTS_GROUP_PERSONAL.appendChild(contentQuestGroup);
          QUESTS_GROUP_PERSONAL.className = 'quest-category-group';
        break;
        case 'category-health':
          QUESTS_GROUP_HEALTH.appendChild(contentQuestGroup);
          QUESTS_GROUP_HEALTH.className = 'quest-category-group';
        break;
        case 'category-work':
          QUESTS_GROUP_WORK.appendChild(contentQuestGroup);
          QUESTS_GROUP_WORK.className = 'quest-category-group';
        break;
        case 'category-fun':
          QUESTS_GROUP_FUN.appendChild(contentQuestGroup);
          QUESTS_GROUP_FUN.className = 'quest-category-group';
        break;
      }
      questsToDo += 1;
      H3_ELT.textContent = 'Quests Defeated ' + questsDefeated + '/' + questsToDo;
      uniqueQuestNumber++;
  },
  defeatQuest: function() {
    CONTENT_MAIN_PAGE.addEventListener('click', function(event) {
      let elementClicked = event.target;
      if (elementClicked.className === 'quest-check') {
        let crossDefeatQuest = document.createElement('i');

        crossDefeatQuest.className = 'fas fa-times';
        elementClicked.appendChild(crossDefeatQuest);

        elementClicked.nextSibling.children[2].className = 'content-quest-done';
        elementClicked.className = 'quest-check completed';

        switch (character.class) {
          case 'mage':
            elementClicked.nextSibling.children[2].children[0].style.background = 'url("http://maeva-contact.com/questlist/assets/images/classes/mage_45x45.png")'
          break;
          case 'rogue':
            elementClicked.nextSibling.children[2].children[0].style.background = 'url("http://maeva-contact.com/questlist/assets/images/classes/rogue_45x45.png")'
          break;
          case 'warrior':
            elementClicked.nextSibling.children[2].children[0].style.background = 'url("http://maeva-contact.com/questlist/assets/images/classes/warrior_45x45.png")'
          break;
        }
        character.experience += 50;
        questsDefeated += 1;
        H3_ELT.textContent = 'Quests Defeated ' + questsDefeated + '/' + questsToDo;
        character.debugObject();
      }
    });
  },
  deleteQuest: function(questNumber) {
    let questAdded = document.getElementsByClassName('quest-added');
    let questCategoryGroup = document.getElementsByClassName('quest-category-group');

    for (let i = 0; i < questAdded.length; i++) {
      if (questAdded[i].id === questNumber) {
        if (questAdded[i].children[1].children[2].className === 'content-quest-done') {
          questsDefeated--;
        }
        questAdded[i].remove();
      }
    }
    console.log(questNumber);
    quests.debugQuest();
    questsToDo -= 1;
    H3_ELT.textContent = 'Quests Defeated ' + questsDefeated + '/' + questsToDo;

    for (let j = 0; j < questCategoryGroup.length; j++) {
      if (questCategoryGroup[j].children.length < 2) {
        questCategoryGroup[j].className = 'quest-category-group hidden';
      }
    }
  }
};

questManagement.manageDefaultQuest();
questManagement.addQuest();
questManagement.deleteCustomQuest();
questManagement.changeQuestCategory();
questManagement.defeatQuest();

function handleQuest(className, id){

  let category;
  let title;
  let mail = document.getElementById("session_name").value;
  let ID = 0;

  if(id.indexOf("quest") != -1){
    category = customQuestCategory;
    title = document.getElementById("quest-user-input").value;
    ID = questCount;
    console.log(title.toUpperCase());
  }else if(id.indexOf("course") != -1){
    category = "course";
    title = "FINISH A UDACITY LESSON";
    console.log(title);
  }else if(id.indexOf("slack") != -1){
    category = "slack";
    title = "PARTICIPATE ON A UDACITY SLACK CHANNEL";
    console.log(title);
  }else if(id.indexOf("forum") != -1){
    category = "forum";
    title = "HELP A FELLOW STUDENT ON THE FORUM";
    console.log(title);
  }else if(id.indexOf("project") != -1){
    category = "project";
    title = "ADD ONE FEATURE ON A SIDE PROJECT";
    console.log(title);
  }else if(id.indexOf("challenge") != -1){
    category = "challenge";
    title = "COMPLETE A CODE CHALLENGE";
    console.log(title);
  }else if(id.indexOf("personal") != -1){
    category = "personal";
    title = "TAKE TIME FOR MYSELF";
    console.log(title);
  }else if(id.indexOf("health") != -1){
    category = "health";
    title = "GO FOR A WALK OR ANY ACTIVITY FAR FROM THE COMPUTER";
    console.log(title);
  }else if(id.indexOf("work") != -1){
    category = "work";
    title = "DO MY BEST AT WORK";
    console.log(title);
  }else if(id.indexOf("fun") != -1){
    category = "fun";
    title = "TAKE SOME FUN TIME WITH FRIENDS OF FAMILY";
    console.log(title);
  }else{
    ID = id;
  }


  if(className.indexOf("quest-check") != -1){
    //Checks if quest is completed and grants user XP
    /*$.post('gainXP.php' ,{postMail: mail}, function(data){
      alert(data.level);
    });*/
    $.ajax({
        type: "POST",
        url: "gainXP.php",
        data: {postMail: mail},
        dataType: 'json',
        cache: false,
        success: function(data)
        {
            let user_level = data.level;
            let user_experience = data.experience;
            let user_experience_needed = data.experience_needed;
            alert(user_level + " " + user_experience + " " +user_experience_needed);
        }
    });

  }else if(className.indexOf("disable") != -1){
    //Quest was disabled so add it
    $.post('addQuest.php', {postCategory: category, postTitle: title.toUpperCase(), postMail: mail, postID: ID});
  }else{
    //Quest was added so remove it
    if(ID != 0){
      $.post('removeQuest.php', {postTitle: "none", postMail: mail, postID: ID});
    }else{
      $.post('removeQuest.php', {postTitle: title.toUpperCase(), postMail: mail, postID: ID});
    }
  }

}
