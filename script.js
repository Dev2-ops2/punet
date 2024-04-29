// Veprimet qe do kryejme kur ngarkohet faqia

// Zgjedh elementet qe na duhen nga faqia
const button = document.querySelector('button');
const inputField = document.querySelector('input');
const emptyListMessage = document.querySelector('.empty-list-message');
const todoList = document.querySelector('ul');
// const footer = document.querySelector('footer');

// Pergatis listen me aktivitete 
let activities = [];
const local_storage_activities_key = 'activities';

let activities_from_localStorage = localStorage.getItem('local_storage_activities_key');
if (activities_from_localStorage) {
  activities = JSON.parse(activities_from_localStorage);
}
showContent()

//VEPRIME DINAMIKE
button.addEventListener('click', () => addActivity());


function showContent() {
  emptyListMessage.innerText = '';
  todoList.innerText = '';

  if (activities.length > 0) {
    //shfaq aktivitete
    for (let i = 0; i < activities.length; i++) {
      todoList.innerHTML += `
      <li class="to-do-item">
        <div class="to-do-check">
          <img src="images/check.svg" alt="Check Icon">
        </div>
        <p class="to-do-text">${activities[i]}</p>
      </li>
      `;
    }
    console.log(activities);
    removeItem();
  } else {
    emptyListMessage.innerText = 'Nuk ka asnje aktivitet';
  }
}

function addActivity() {
  const newActivity = inputField.value.trim();
  if (newActivity.length > 0) {
    activities.push(newActivity);
    inputField.value = '';
    showContent();
    localStorage.setItem('local_storage_activities_key', JSON.stringify(activities));
  }
}

function removeItem() {
  const checks = document.querySelectorAll('.to-do-check');
  console.log(checks)
  for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener('click', function () {
      console.log(`u klikua check me index ${i}`)
      activities.splice(i, 1);
      localStorage.setItem('local_storage_activities_key', JSON.stringify(activities));
      showContent();
      console.log(activities);
    })
  }
}


