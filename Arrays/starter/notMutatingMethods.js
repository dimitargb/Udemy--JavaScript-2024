'use strict';

/* We will look at the Reverse, Sort and Splice Methods, because theu mutate the original array and their alternatives.*/

// 1. Reversing an Array using the toReversed Method :

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//const reverseMovements = movements.slice().reverse();
//console.log(reverseMovements); // [1300, 70, -130, -650, 3000, -400, 450, 200]
//console.log(movements); // [1300, 70, -130, -650, 3000, -400, 450, 200] the original array has changed.

/* We can preserve the original array by using the slice Method(). If we use the slice Method the original array, does not
   change !!! */

/* but insted of using slice() we can use the toReversed() Method */

const reverseMovements1 = movements.toReversed();
console.log(reverseMovements1); // [1300, 70, -130, -650, 3000, -400, 450, 200];
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300] the original aray does not change !!!

// 2. toSorted() Method instead of sort, it will not change the origina array !!!

// 3. toSpliced() Method instead of splice, it will not change the origina array !!!

// 4. With() Method can change the Elements in an array without to change the original Array.

/* let's say we want to change the second Element to something else. If we do it this way we mutate the original array. */
/* If we want not to mutate the original array, we create a brand new Array and we call the with() Method */
movements[1] = 350;
console.log(movements); // [200, 350, -400, 3000, -650, -130, 70, 1300] El in position 1 has become 350 !!!

/* The with() Method recives 2 Argumants -> first is the index we want to update in the new Array and the new value -> 350 */
const newMovements = movements.with(2, -500);
console.log(newMovements); // [200, 350, -500, 3000, -650, -130, 70, 1300] we changed the number at index 2 with (- 500).
console.log(movements); // [200, 350, -400, 3000, -650, -130, 70, 1300] here the original array stays the same.
