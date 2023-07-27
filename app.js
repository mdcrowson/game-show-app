const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const list = document.querySelector("#phrase ul");
const letterAmount = document.getElementsByClassName('letter').length;
const shownLetterAmount = document.getElementsByClassName('show').length;
const overlay = document.getElementById('overlay');
let missed = 0;

const start = document.querySelector('.btn__reset');
start.addEventListener('click', (e) => { 
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
  const letter = document.getElementsByClassName("letter");
  for (i=0; i < letter.length; i++) {
    if (letter[i].textContent === btn.textContent) {
      letter[i].className = "letter show";
      const match = letter[i].textContent;
      return match;
    }
  } return null;

}

function checkWin() {
  if (letterAmount === shownLetterAmount) {
    overlay.className = 'win';
    overlay.style.display = 'show';
  } else if (missed >= 5) {
    overlay.className = 'lose';
    overlay.style.display = 'show';
  } 
}

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
    const heart = document.getElementsByClassName('tries')[missed].querySelector('img');
    heart.src = "images/lostHeart.png";
    missed +=1;
    console.log(missed);

}

checkWin()

});






