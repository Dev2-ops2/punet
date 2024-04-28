// Veprimet qe do kryejme kur ngarkohet faqia

// Zgjedh elementet qe na duhen nga faqia
const button = document.querySelector('button');
const inputField = document.querySelector('input');
const emptyListMessage = document.querySelector('.empty-list-message');
const todoList = document.querySelector('ul');
// const footer = document.querySelector('footer');

// Pergatis listen me aktivitete 
let activities = [];
showContent()

//VEPRIME DINAMIKE
button.addEventListener('click', function () {
  newActivity = inputField.value.trim();
  if (newActivity.length > 0) {
    activities.push(newActivity);
    inputField.value = '';
    showContent();
    // console.log('activities::', activities);
  }
})


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

    const checks = document.querySelectorAll('to-do-check');




  } else {
    emptyListMessage.innerText = 'Nuk ka asnje aktivitet';
  }
}

// let footerShtes = ` <div class="shtes">
// <h1>Jam ${emer}</h1>
// <p>Lorem, ipsum dolor.</p>
// <img src="images/add.svg" alt="Add">
// </div>`;

// footer.innerHTML = footerShtes;

