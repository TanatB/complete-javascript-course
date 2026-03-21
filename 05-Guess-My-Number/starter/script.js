'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber, typeof secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 'Check!' Button
document.querySelector('.check').addEventListener('click', function () {
  const guessPrompt = Number(document.querySelector('.guess').value);
  console.log(guessPrompt);

  if (score === 0) {
    displayMessage('GAME OVER...');
  } else if (!guessPrompt) {
    displayMessage('No number');
  } else if (guessPrompt === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct!');
    document.querySelector('body').style.backgroundColor = 'green';

    // Set highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessPrompt !== secretNumber) {
    // document.querySelector('.message').textContent =
    // guessPrompt > secretNumber ? 'Too high..' : 'Too low..';
    displayMessage(guessPrompt > secretNumber ? 'Too high..' : 'Too low..');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// 'Again!' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
