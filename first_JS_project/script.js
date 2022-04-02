'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    // when there's no input
    if (!guess) {
      document.querySelector('.message').textContent = 'No number';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // when number is negative
    else if (guess <= 0) {
      document.querySelector('.message').textContent = 'No negative number!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // when number is too high
    else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Number is too high';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // when number is too low
    else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // when number is correct
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent =
        'Congratulations! you won!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        document.querySelector('.highscore').textContent = score;
      }
    }
  } else if (score === 0) {
    document.querySelector('.message').textContent = 'You Lost!';
    document.querySelector('body').style.backgroundColor = '#ff0000';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
});
