// Veprimet qe do kryejme kur ngarkohet faqia

// Zgjedh elementet qe na duhen nga faqia
const button = document.querySelector('button');
const inputField = document.querySelector('input');
const emptyListMessage = document.querySelector('.empty-list-message');
const todoList = document.querySelector('.to-do-list');

// Pergatis listen me aktivitete 
let activities = ['HTML', 'CSS', 'JS'];

showContent();

// Funksioni qe vendos cfar do tregojm ne faqe
function showContent() {
  // Pastroj cdo gje
  emptyListMessage.innerText = '';
  todoList.innerText = '';

  if (activities.length > 0) {
    // Shfaq aktivitetet

    //   activities.forEach((activity, index) =>
    //     todoList.innerHTML += `  <li class="to-do-item">
    //     <div class="to-do-check">
    //         <img src="images/check.svg" alt="Check Icon">
    //     </div>
    //     <p class="to-do-text">${activity}</p>
    // </li>`
    //   )
    for (let i = 0; i < activities.length; i++) {
      todoList.innerHTML += `
        <li class="to-do-item">
          <div class="to-do-check">
              <img src="images/check.svg" alt="Check Icon">
          </div>
          <p class="to-do-text">${activities[i]}</p>
      </li>`;
    }
  }
  else {
    // Shfaq mesazhin ska aktivitete
    emptyListMessage.innerText = "Nuk ka aktivitete";
  }
}
//vazhdo
//add1
//add2
//fshim account dhe shtojme conflict2
//conflict1
//etc..