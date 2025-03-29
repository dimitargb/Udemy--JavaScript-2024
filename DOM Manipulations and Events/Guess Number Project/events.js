'use strict';
//So firts we select this element - Check!
document.querySelector('.check');
// and now on this element we can call the addeventListener() method
//document.querySelector('.check').addEventListener('click');

//Into this addeventListener() method we first need to pass the type of the event.
//So the name of the event is 'click' and this is the first argument we pass into this function.
//The second argunet is a function.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number !';
  }
});

//Becuse guess is astring we have to first convert it to a number with the Number function.
//After this we have to check wheter there is avalue in the Ckeckbox. If there is no value we roint a message.
