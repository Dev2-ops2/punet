const button = document.querySelector('button');
const inputText = document.querySelector('input');
const toDoList = document.querySelector('ul');
const tekstSkaPune = document.querySelector('.empty-list-message');
const fshijTeGjitha = document.querySelector('.fshij-te-gjitha');

let punet = [];

storage = localStorage.getItem('punet');

if(storage){
  punet = JSON.parse(storage);
}

showContent();

fshijTeGjitha.addEventListener('click', function () {
  if(punet.length==0){
    alert('Nuk ka aktivitete per te fshir');
  }
  else{
    if (confirm('Je i sigurt qe do ti \nfshish te gjitha aktivitetet?') === true) {
      punet = [];
      localStorage.setItem('punet', JSON.stringify(punet));
      showContent();
      inputText.focus();
    }
  }
})

inputText.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {  
    shtoAktivitet();
  }
})
button.addEventListener('click', function () {
  shtoAktivitet();
})

function shtoAktivitet() {
  let newActivity = inputText.value.trim();
  if (newActivity.length > 0) {
    punet.push(newActivity);
    localStorage.setItem('punet', JSON.stringify(punet));
    showContent();
    inputText.value = '';
  }
}

function showContent() {
  toDoList.innerText = '';
  tekstSkaPune.innerText = '';
  if (punet.length > 0) {

    for (let i = 0; i < punet.length; i++) {
      toDoList.innerHTML += `<li class="to-do-item">
    <div class="to-do-check">
    <img src="images/check.svg" alt="Check Icon">
    </div>
    <p class="to-do-text">${punet[i]}</p>
</li>`
    }

    const checks = document.querySelectorAll('.to-do-check');
    for (let i = 0; i < checks.length; i++) {
      checks[i].addEventListener('click', function () {
        punet.splice(i, 1);
        localStorage.setItem('punet', JSON.stringify(punet));
        showContent();
      })
    }
  } else {
    tekstSkaPune.innerText = 'Ska asnje aktivitet'
  }

}

