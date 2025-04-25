'use strict';
/* In ES 2024 a new feature was called arrayGrouping was added to the language.
   This feature allows us to group values in an array, based on a condition !!! */

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

/* Let's group this movements by wether they are Deposit or Withdrawel */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* So we create a variable called grouppedMovements. Here we actually do not use a Method, but we write 
   Object.groupBy(), which exepts 2 Parameters. The first is the Array that we want to group -> movements and the second
   Parameter is to pass in a callBack Function which will determin how exactely we want to group the values in the array. */

const grouppedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdraws'
);

console.log(grouppedMovements); // We get an Object as a result -> {deposits: Array(5), withdraws: Array(3)}

/* So esentially in this callBack function we need to return the diffrent group Names deposits or withdraws, that we
   want our array to be groupped by and each of the Elements of the array will be correctly grouped in one of the
   categories according to our code. */

/* In the accounts array we have diffrent numbers of movements and we can classify the diffrent acccounts by the bumber of movements they have made */
const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length; // how many movements we have

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity[active]); // {very active: Array(2), inactive: Array(1), active: Array(1)}
