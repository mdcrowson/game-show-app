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