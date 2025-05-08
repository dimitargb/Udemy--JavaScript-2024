'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
/* Find Method -> we can use the find() mrthod to retrieve on Element of an array, based on a condition !!!
   The find() method accepts a callBack Function wich will be called as the method loops over the array.
   So find() is just another method that loops over the array, but it retieves an Element of the array. */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Here we look for the element and we cpecify a condition -> el < 0 (withdrow)  a negative lement!!
/* Just like the filter method, in the find method the callBack Function returns a boolean. So the result of this  
   is either true or false. 
   The find method will not return a new array as the filter method, but just the first Element of the array,
   that satifys this condition!!!*/

const firstWithdrow = movements.find(el => el < 0); // it will return the first El which satisfies the condition !!!
console.log(movements); // this has not changed the array !!!
console.log(firstWithdrow); // -400 -> the first negative value (withdrow)

/* With the find Method we can find an Object in the Array based on some Property of that Object */
console.log(accounts); // this is an array of Objects

/* So as we loop over the accounts, each Element is one account. So let's say we want to select one account by their name.
   Let's say we want to get the account where the owner is Jessica Davis. So we can siply write
   account.owner === 'Jesicca Davis' */
const account = accounts.find(el => el.owner === 'Jessica Davis');
console.log(account); // it will find the Object of the account ofJessica Davis

/* So using the find method, we can search the array to find an Object that matches a certain Property we already know.
   Whenever the condition owner === 'Jessica Davis' is true, the Object with this Property is returned.#
   So usually the goal of the find method is to find exactely one Element. Therefor we usually set up a Condition,
   where only one Element can satisfy that Condition.  */
