window.addEventListener('load', init)

// Globals

// Available levels
const levels = {
    easy: 5,
    medium: 4,
    hard: 2
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.getElementById('input-word');
const currentWord = document.getElementById('current-word');
const seconds = document.getElementById('seconds');
const message = document.getElementById('message');
const timeElem = document.getElementById('time');
const scoreElem = document.getElementById('score');

const englishWords = [
    'establishment',
    'nutrition',
    'qwerty',
    'revolver',
    'definition',
    'exhibition',
    'quantity',
    'english',
    'grammar',
    'sometimes',
    'cocktail',
    'developer',
    'adjacent',
    'conqueror',
    'winner',
    'viewer',
    'javascript',
    'hero',
    'echo',
    'leader'
];

// Initialize Game
function init() {
    // Load word from array
    showWord(englishWords);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkGameStatus, 50);
}

// Pick & show random word
function showWord(words) {
    // Generate random array
    const randIndex = Math.floor(Math.random() * words.length);

    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Start match
function startMatch() {
    isPlaying = true;
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(englishWords);
        wordInput.value = '';
        score++;
    }

    if (score < 0) {
        scoreElem.innerHTML = 0;
    } else {
        scoreElem.innerHTML = score;
    }

    // Change message element style to usual
    if (message.classList.contains('text-warning')) {
        message.classList.remove('text-warning');
    }
}

// Match currentWord to wordInput
function matchWords() {
    if (currentWord.innerHTML === wordInput.value) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrease time
        time--;
    } else if (time === 0) {
        // Game is Over
        isPlaying = false;
    }
    // Show time
    timeElem.innerHTML = time;
}

function checkGameStatus() {
    if (!isPlaying && time === 0) {
        // Change message style
        if (!message.classList.contains('text-warning')) {
            message.classList.add('text-warning');
        }
        // Change message text
        if (message.innerHTML != "Game Over!!!") {
            message.innerHTML = "Game Over!!!";
        }
        // Change score
        score = -1;
    }
}
