'use strict';

document.querySelector('.message').textContent;
console.log(document.querySelector('.message').textContent); //Start Guessing....

/*Besides getting the textContent of the element we can also set the content of the element.
Instead of Start Guessing...., let's say correct number.*/
document.querySelector('.message').textContent = '🍹 Correct  Number !';

// now the text is set to Correct Number ;

console.log(document.querySelector('.message').textContent); //🍹 Correct  Number !
document.querySelector('.number').textContent = 10; // ?
document.querySelector('.score').textContent = 15; //🍹 Correct  Number !

//Setting the value:
document.querySelector('.guess').value = 18;

//Getting the data from input field:
console.log(document.querySelector('.guess').value);
