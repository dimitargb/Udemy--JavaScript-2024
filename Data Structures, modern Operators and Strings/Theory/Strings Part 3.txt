'use strict';

//  1.Split Method:

/* Split Method converts the string into an Array and allows us to split a string into mulitple parts based on a divider */

console.log('a+very+nice+string'.split('+')); // It will split the string by the + sign -> 'a','very', 'nice', 'string';
// The result will be Elements of a new array -> ['a','very', 'nice', 'string'];

console.log('Dimitar Damianov'.split(' ')); // ['Dimitar', 'Damianov'];
const [firstName, lastName] = 'Dimitar Damianov'.split(' ');
console.log(firstName, lastName); // Dimitar Damianov

// 2. Join Method:

/* Join method converts the array into string !!! */

/* Now let's say we want to make the last name upperCase and we want to add a mister in the beginning. */
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(typeof newName); // Mr.Dimitar DAMIANOV

/* Function to capitalize name */
const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const word of names) {
    namesUpper.push(word[0].toUpperCase() + word.slice(1));
    //namesUpper.push(word.replace(word[0], word[0].toUpperCase())); replacing the first letter to capital letter
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('jessica ann smith davis'); // transforming the first letter of each name to a calital letter !!!
capitalizedName('dimitar damianov');

// 3. Padding Method  means to add a number of characters to the string untill the string has a certain length.

const message = 'Go to gate 23!';
/*padStart() will add some character to the beginning of the string, firts argument is the lenght of the string, let's say we 
  want it to be 25 charcters long and then the chararcter we want to pad the String with '+';
  padEnd() will add some character to the end of the string,*/

console.log(message.padStart(25, '+')); // the lenght of the entire string should be 25.
console.log(message.padStart(25, '+').padEnd(35, '+')); // adding '+' up to lenght of 35.

// Example - when you see a credit card on internet you never see the hole digits, just some of them the rest is masked
/* Let's create a function taht does this masking of the credit card on the internet */

const maskCreditCard = function (number) {
  const string = number + ''; // converting a number to a string
  //const string = String(number);

  const lastCharacters = string.slice(-4);
  //console.log(lastCharacters);

  return lastCharacters.padStart(string.length, '*');
};

console.log(maskCreditCard(1246587696970789)); //*************0789
console.log(maskCreditCard('4578891122322244')); //***********2244

// 4. Repeat Method
/* This method allows us to repeat the same string multiple times */

// we want to create a bigger string repeating this one muliple times
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(3)); // we repeat the message 3 times

// Function planes in line for take off:
const planesInLine = function (number) {
  console.log(`There are ${number} planes in line ${'✈️'.repeat(number)}`);
};

planesInLine(3);
planesInLine(5);
planesInLine(9);
