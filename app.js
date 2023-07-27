const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const start = document.querySelector('.btn__reset');

start.addEventListener('click', (e) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

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
  const list = document.querySelector("#phrase ul");
  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement('li');
    item.textContent = arr[i];
    list.append(item)
    if (/^[a-zA-Z]/.test(arr[i])) {
      item.className = "letter";
    }
  }
}


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


function checkLetter(btn) {
  const letter = getElementsByClassName("letter");
  for (i=0; i < letter.length; i++) {
    if (letter[i] === btn.textContent) {
      letter[i].className = "letter show";
      const match = letter[i];
    }
  }
  if (match) {
    return match;
  } else {
    return null;
    }

}



const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (evt) => {
  const isButton = evt.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  const button = evt.target;
  button.className = 'chosen';
  button.setAttribute('disabled', true);
  button.setAttribute('autocomplete', 'off');
});






