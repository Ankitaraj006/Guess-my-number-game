'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Answer!!';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
//We cannot use just document.querySelector('.score') = "10"; because there are more things than textContent.

document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//For Check Button. We will use btn class because it's generic
//Here addEventListener defines what will it perform and here it's just click
document.querySelector('.check').addEventListener('click', function () {
  //Storing it in a variable
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number!!');

    //When player wins the games
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;

    //Correct answer will change the background color and secretNumber box
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Highscore will change only when the player wins the game
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //WHen the guess is too high or too low.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Number is too high!!'
          : '📉 Number is too low!!'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost this game.');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
