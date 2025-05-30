'use strict';
/* The sort Method mutates the original array. */

/* This is for Strings */
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //  ['Adam', 'Jonas', 'Martha', 'Zach'] sorted aplphabetically feom A to Z;
console.log(owners); //  ['Adam', 'Jonas', 'Martha', 'Zach'] the original array has been mutated too.

/* For Numbers
   The sort Method, does the sorting based on strings. It coverts everithing to string and then it does the sorting.
   To fix this we pass a compair callBack function into the sort Method. */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70] the numbers are not ordered in any way

// Sorted with the callBack Function in ascending and discending order( from small to large numbers)
// return < 0, A, B
// return > 0, B, A
console.log(movements.sort((a, b) => a - b)); // [-650, -400, -130, 70, 200, 450, 1300, 3000] - Acsending order
console.log(movements.sort((a, b) => b - a)); // [3000, 1300, 450, 200, 70, -130, -400, -650] - Discending order
