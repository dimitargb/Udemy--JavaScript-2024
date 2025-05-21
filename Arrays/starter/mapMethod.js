'use strict';
/* The Map method is another method to loop over arrays. The Map method unlike forEach method will give us a new array.
    And this new array will contain in each position the result of applied CallBack Function to the original array Elements/ */

/* This movements are in Euros and we try to convert them in US Dollars */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
/* Now what we want ot do is multiply each Element form movements array by 1.1 to covert them. */
// const converted = movements.map(value => value * euroToUsd);
// console.log(converted);

const movementsUSD = movements.map(function (el) {
  return el * euroToUsd;
});
console.log(movementsUSD); // converted array form Eueros to US Dollars

// Let's use the for off loop to do the same calculation
const movementToUsd = [];
for (const movement of movements) {
  movementToUsd.push(movement * euroToUsd);
}
console.log(movementToUsd); // Is the same as the map method above

/* We can use an arrow function here and simplify this into just one line of code */

const transferUsd = movements.map(el => el * euroToUsd); // arrow function
console.log(transferUsd);

/* Besides the current array Element, we also get access to the current index and the whole array. */

const movementsDescriptions = movements.map((el, i, arr) => {
  return `Movement ${i + 1}: You ${
    el > 0 ? 'deposited' : 'withdrew '
  } ${Math.abs(el)}`;
});
console.log(movementsDescriptions);
