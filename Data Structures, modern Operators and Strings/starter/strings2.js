'use strict';
const airline = 'TAP Air Portugal';
const plane = 'A320';

// 1. Changing the case of a String to toLowerCase or toUpperCase
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

//Let's fix the capitalization in a passenger name:
const passenger = 'jOnAS'; // Jonas

// The first step is to put everything inot lower case.
const passengerLower = passenger.toLowerCase(); //jonas
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Function to spell correctly the name:
const correctName = function (name) {
  const nameLower = name.toLowerCase();
  const correct = nameLower[0].toUpperCase() + nameLower.slice(1);

  return correct;
};

console.log(correctName('dImiTaR')); // Dimitar

// Comparing Emails:
const email = 'hello@dimitar.io';
const loginEmail = ' HELLO@dimitar.Io \n';

/* First Step is to convert it to lower case: */
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
/* There is trimStart() and trimEnd(), which starts either from the start or from the end. */
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail); // true

// 2. Replace parts of Strings:
// The replace method is case sensitive !!!
const priceGB = '288,97£'; // In Europe we use the comma as a decimal separator, in USA they use the period .
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); //288.97$

/* replaceAll --replaces all the doors with gates */
const announcement =
  'All passesnger come to the boarding door 18. Boarding door 18.';

//console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // using Regular expression

// 3. There are 3 methods that return Booleans. ->  includes(), startsWith(), endsWith();
const planeNew = 'Airbus A320neo';
console.log(planeNew.includes('A320')); // ture it includes 'A320'.
console.log(planeNew.includes('Boing')); // false it does not include 'Boing'.

console.log(planeNew.startsWith('Airb')); // ture it starts with 'Airb'
console.log(planeNew.endsWith('neo')); // ture it ends with 'neo'

if (planeNew.startsWith('Airbus') && planeNew.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Example -> We want to check if the baggage of a passenger is allowed to be cheked in.
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
