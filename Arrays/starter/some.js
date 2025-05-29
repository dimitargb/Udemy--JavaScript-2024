'use strict';

// Some method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Here it checks only for equality
console.log(movements.includes(-130)); // true

/* We can use the includes method to test if an array includes a certain value. It will return true if any value in the array
   is exactely equal to -130, this is a test to an equality, but if we wan to test for a condition we use the some method !!! 
   
   Let's say that we want to know if there has been any deposits on the account, in other words we want to know if
   there was any positive movement in this array, any number abouve 0.*/

/* Here it checks for a condition using the some method */
const checkCondition = movements.some(el => el === -130);
console.log(checkCondition); // true

/* If we want to test if there is any depositis abouve 5000 */
const anyDeposits = movements.some(el => el > 5000);
console.log(anyDeposits); // false

// Every Method
/* The every method only returns true if all of the Elements in the array satify the condition that we pass in. */

console.log(movements.every(el => el > 0)); // false

/* in account4 all the movements are positive, that's why every shuld be true in this condition */
console.log(account4.movements.every(el => el > 0)); // true

// 7. Every Method
/* The every method only returns true if all of the Elements in the array satify the condition that we pass in. */

console.log(movements.every(el => el > 0)); // false

/* in account4 all the movements are positive, that's why every shuld be true in this condition */
console.log(account4.movements.every(el => el > 0)); // true

/* Separate Callback */
const deposit = el => el > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
