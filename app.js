// Variables //
const qwerty = document.getElementById('qwerty');
const keyboard = qwerty.querySelectorAll('button');
const phrase = document.getElementById('phrase');
const list = document.querySelector("#phrase ul");

const overlay = document.getElementById('overlay');
const overlayHeader = overlay.querySelector('h2');
const start = document.querySelector('.btn__reset');
let missed

const tries = document.getElementsByClassName('tries');

// Begin and Reset Game Event Listener //
start.addEventListener('click', (e) => { 
    missed = 0;  
    while( list.firstChild ){
      list.removeChild( list.firstChild );
    }
    for (let key of keyboard) {
      if (key.className = 'chosen') {
        key.classList.remove('chosen');
        key.removeAttribute('disabled');
        key.removeAttribute('autocomplete');
      }
    }
    for (let i=0; i < tries.length; i++) {
      let life = tries[i].querySelector('img');
      if (life.src = "images/lostHeart.png") {
        life.src = "images/liveHeart.png";
      }
    }
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
    overlay.style.display = 'none';
    
});


// Game Functions //
const phrases = [
    "Pride and Prejudice",
    "Catcher in the Rye",
    "Jane Eyre",
    "Wuthering Heights",
    "The Road"
]

function getRandomPhraseAsArray(arr){
  const randomPhrase = Math.floor(Math.random() * phrases.length);
  const chars = phrases[randomPhrase].split('');
  return chars;
}

function addPhraseToDisplay(arr) { 
  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement('li');
    item.textContent = arr[i];
    list.append(item)
    if (/^[a-zA-Z]/.test(arr[i])) {
      item.className = "letter";
    } else {
      item.className = "space";
    }
  }
}


function checkLetter(btn) {
  const letters = document.getElementsByClassName("letter");
  let match = "";
  for (i=0; i < letters.length; i++) {
    let letter = letters[i].textContent;
    if (letter.toLowerCase() === btn.textContent) {
      letters[i].className = "letter show";
      match = letter;
    }
  }
    if(/^[a-zA-Z]/.test(match)){
      return match;
    } else {
      return null;
    }
  

}

function checkWin() {
  const letterAmount = document.getElementsByClassName('letter').length;
  const shownLetterAmount = document.getElementsByClassName('show').length;
  if (letterAmount === shownLetterAmount) {
    setTimeout( () => {
      overlay.className = 'win';
      overlay.style.display = '';
      overlayHeader.textContent = "You Won!";
      start.textContent = "Play Again";
    }, 250);
  } else if (missed >= 5) {
      overlay.className = 'lose';
      overlay.style.display = '';
      overlayHeader.textContent = "You Lost";
      start.textContent = "Play Again";
  } 
}


// Keyboard Event Listener & Check Win //
qwerty.addEventListener('click', (evt) => {
  const isButton = evt.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  const button = evt.target;
  button.className = 'chosen';
  button.setAttribute('disabled', true);
  button.setAttribute('autocomplete', 'off');

  const letterFound = checkLetter(button);
  

  if (letterFound === null) {
    if (missed < 5) {
      const heart = tries[missed].querySelector('img');
      heart.src = "images/lostHeart.png";
      missed +=1;
    }

}

checkWin()

});






