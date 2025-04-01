'use strict';
// To start we need to define the secret number form the game.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

//  Math.random() gives allways diffrent numbers between 0 and 1.

/*Math.random() gives allways diffrent numbers between 0 and 1.
So if we want a number between 1 and 20 we will multiply Math.random() * 20;
The result from Math.random() * 20 will never include 20 it only includes untill 19.9999;
So to make it 20 we need to add 1 at the end.

Math.trunc(Math.random()* 20) + 1;*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🍹 Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    //This way we change the background color of the whole body.
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Whenever we are manilpulating the style we always use a string to put the new value !!!
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.number').style.backgroundColor = 'orange';

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 🚩 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 🚩 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*Let's say we want to change the background of the entire page to a green color whenever the player guesses the right
number. Basically when the player wins the game.*/
//This should happend in the scenariio where the ppalyer has guessed the secret number.
