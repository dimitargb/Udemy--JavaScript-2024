'use strict';

// 1.Function coverting the first letter to capital letter !!!

function converting(names) {
  const namesArray = names.split(' ');
  const convertedNames = [];
  //console.log(namesArray);

  for (const name of namesArray) {
    //console.log(name[0]);
    //convertedNames.push(name[0].toUpperCase() + name.slice(1));
    convertedNames.push(name.replace(name[0], name[0].toUpperCase()));
  }
  console.log(convertedNames.join(' '));
}
converting('dimitar damianov');
converting('ann nicole smith');

// 2.Function to check the middel seats:
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😧');
  } else {
    console.log('You got lucky 👍');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// 3. Function check baggage:

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board!');
  } else {
    console.log('Wellcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife.');
checkBaggage('I have some socks and camera');
checkBaggage('I have some snacks  and gun for protection');

// 4. Function to mask the first digits of a credit card on the internet:

const maskCreditCard = function (number) {
  const string = number + ''; // converting a number to a string
  //const string = String(number);

  const lastCharacters = string.slice(-4);
  //console.log(lastCharacters);

  return lastCharacters.padStart(string.length, '*');
};

console.log(maskCreditCard(1246587696970789)); //*************0789
console.log(maskCreditCard('4578891122322244')); //***********2244

// 5. Function planes in line for take off:

const planesInLine = function (number) {
  console.log(`There are ${number} planes in line ${'✈️'.repeat(number)}`);
};

planesInLine(3);
planesInLine(5);
planesInLine(9);
