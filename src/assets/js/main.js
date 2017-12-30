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
const CONTENT_MAIN_PAGE = document.getElementById('content-main-page');

const QUESTS_GROUP_COURSE = document.getElementById('quests-group-course');
const QUESTS_GROUP_SLACK = document.getElementById('quests-group-slack');
const QUESTS_GROUP_FORUM = document.getElementById('quests-group-forum');
const QUESTS_GROUP_PROJECT = document.getElementById('quests-group-project');
const QUESTS_GROUP_CHALLENGE = document.getElementById('quests-group-challenge');
const QUESTS_GROUP_PERSONAL = document.getElementById('quests-group-personal');
const QUESTS_GROUP_HEALTH = document.getElementById('quests-group-health');
const QUESTS_GROUP_WORK = document.getElementById('quests-group-work');
const QUESTS_GROUP_FUN = document.getElementById('quests-group-fun');

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

      questManagement.createQuest();
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
  },
  createQuest: function() {
    let contentQuestGroup = document.createElement('div');
    let questCheck = document.createElement('div');
    let contentQuestTitleGroup = document.createElement('div');
    let contentQuestTitle = document.createElement('p');
    let contentQuestXP = document.createElement('div');
    let contentQuestDone = document.createElement('div');
    let classItem = document.createElement('div');

    contentQuestGroup.className = 'content-quest-group';
    questCheck.className = 'quest-check';
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
        character.debugObject();
      }
    });
  }
};

questManagement.addQuest();
questManagement.changeQuestCategory();
questManagement.defeatQuest();
