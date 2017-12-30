// VARIABLES
const ADD_QUEST_BTN = document.getElementById('add-quests-btn');
const CONTENT_ADD_QUEST_PAGE = document.getElementById('content-add-quest-page');
const CLOSE_ADD_QUEST_BTN = document.getElementById('close-add-quest-btn');
const MENU_ICON = document.getElementById('menu-icon');
const MENU_PAGE = document.getElementById('menu-page');
const CLOSE_MENU_BTN = document.getElementById('close-menu-btn');
const ADD_QUEST_CATEGORY = document.getElementById('add-quest-category');
const CHOOSE_CATEGORY_POPUP = document.getElementById('choose-category-popup');
const ADD_QUEST_ITEM = document.getElementById('add-quest_item');
const DEFAULT_QUEST_COURSE = document.getElementById('default-quest-course');
const OVERLAY = document.getElementById('overlay');
const H1_ELT_MENU_BAR = document.querySelector('.full-website-main-page h1');
const H1_ELT_MENU_PAGE = document.querySelector('.content-menu-page h1');

// Rename the menu bar and page with user pseudo
H1_ELT_MENU_BAR.textContent = character.pseudo;
H1_ELT_MENU_PAGE.textContent = character.pseudo;

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


// Add quest page
let quests = {
  questContent: 'I think I will do nothing today...',
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
    const CONFIRM_ADD_QUEST = document.getElementById('confirm-add-quest');
    const QUEST_USER_INPUT = document.getElementById('quest-user-input');

    QUEST_USER_INPUT.addEventListener('input', function() {
      quests.questContent = this.value;
      quests.debugQuest();
    });

    // ADD_QUEST_CATEGORY.addEventListener('click', function() {
    //   quests.questCategory = 'category 1';
    //   quests.debugQuest();
    // });

    CONFIRM_ADD_QUEST.addEventListener('click', function(event) {
      // debugger;
      let questElement = document.createElement('div');
      let questElementContent = document.createElement('div');
      let questElementCategory = document.createElement('div');
      let questElementXP = document.createElement('div');
      let questElementAdd = document.createElement('div');
      let questElementAddIcon = document.createElement('i');

      questElement.className = 'add-quest-content-default-group';
      questElementContent.className = 'content-default-quest';
      questElementContent.textContent = quests.questContent;
      questElementCategory.className = 'quest-category-item ' + quests.questCategory;
      questElementXP.className = 'content-quest-xp';
      questElementXP.textContent = '50xp';
      questElementAdd.className = 'confirm-add-quest';
      questElementAddIcon.className= 'fas fa-check';
      questElementAdd.appendChild(questElementAddIcon);

      CONTENT_ADD_QUEST_PAGE.insertBefore(questElement, DEFAULT_QUEST_COURSE);
      questElement.appendChild(questElementContent);
      questElement.appendChild(questElementCategory);
      questElement.appendChild(questElementXP);
      questElement.appendChild(questElementAdd);

      quests.debugQuest();
      event.preventDefault();
    });
  },
  changeQuestCategory: function() {
    CHOOSE_CATEGORY_POPUP.addEventListener('click', function(event) {
      let clickedElement = event.target;

      switch(clickedElement.className) {
        case 'quest-category-item category-course':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/courses_45x45.png")';
          quests.questCategory = 'category-course';
        break;
        case 'quest-category-item category-slack':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/Slack_45x45.png")';
          quests.questCategory = 'category-slack';
        break;
        case 'quest-category-item category-forum':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/forum_45x45.png")';
          quests.questCategory = 'category-forum';
        break;
        case 'quest-category-item category-project':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/project_45x45.png")';
          quests.questCategory = 'category-project';
        break;
        case 'quest-category-item category-challenge':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/challenge_45x45.png")';
          quests.questCategory = 'category-challenge';
        break;
        case 'quest-category-item category-personal':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/home_45x45.png")';
          quests.questCategory = 'category-personal';
        break;
        case 'quest-category-item category-health':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/health_45x45.png")';
          quests.questCategory = 'category-health';
        break;
        case 'quest-category-item category-work':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/work_45x45.png")';
          quests.questCategory = 'category-work';
        break;
        case 'quest-category-item category-fun':
          ADD_QUEST_ITEM.style.background = 'url("http://maeva-contact.com/questlist/assets/images/icons/fun_45x45.png")';
          quests.questCategory = 'category-fun';
        break;
      }
      ADD_QUEST_ITEM.style.backgroundSize = 'cover';
      CHOOSE_CATEGORY_POPUP.className = 'choose-category-popup hidden';
      quests.debugQuest();
    });
  }
};

questManagement.addQuest();
questManagement.changeQuestCategory();
