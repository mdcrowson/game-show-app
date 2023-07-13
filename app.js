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

