"use strict";

//Hoisting with Variables

console.log(me);
//console.log(job); // Uncought Refference Error becuse the varabale is in the ded zone until it is declared.
//console.log(year); // Same is here we get an Error becuse the varabale is in the ded zone until it is declared.

var me = "Dimitar";
let job = "teacher";
const year = 1991;

// Hoisting with functions

console.log(addDecl(2, 3));
function addDecl(a, b) {
  return a + b;
}

//console.log(addExpression(2, 3));
const addExpression = function (a, b) {
  return a + b;
};

//console.log(addArrow(2, 3));
const addArrow = (a, b) => a + b;

// Exsample:

if (!numberOfProducts) deleteShoppingCard();

var numberOfProducts = 10;

function deleteShoppingCard() {
  console.log("All products deleted!");
}

var x = 1;
const y = 2;
let z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
