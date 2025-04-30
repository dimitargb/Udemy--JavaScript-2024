'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

/* We can only chain a method after another one if the first one returns an array !!! */

const totalDepositsUSD = movements
  .filter(el => el > 0)
  .map((el, i, arr) => {
    console.log(arr); // inspecting the pipe line using the arr Parameter
    return el * euroToUsd;
  })
  .reduce((acc, el) => acc + el, 0);

// We can inspect at any stage the chained Pipe Line using the arr Parameter

console.log(totalDepositsUSD);

// Now we can go to our application and calculate the in, out and interest statistics .
