"use strict";
// In a global Scope
console.log(this); // This this Keyword in a global Scope is a window Object

// This Keyword inside a regular function -> this Keyword wil point to undifined
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undifined becuse this Keyword is in the function in 'use strict' otherwise will point to global Object
};

calcAge(1972);

// Arrow function
const calcAge1 = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // this Keyword will point to global Object(window).
  // The Arrow function doesn't have its own this Keyword.
  // The Arrow function uses the lexical Keyword, it means it uses the this Keyword of it's parent function or parent's Scope.
  //So the this Keyword of the parent Scope of this function is window, becuse this is the Keyword in a global Scope.
};

calcAge1(1970);
// Method call
// The this Keyword inside of the method, wil be the Object that is calling the method. The jonas Object.
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
// this Keyword is pointing to the jonas Object.

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // Here we allocate the method form one object to the other.
matilda.calcAge();

// The this Keyword always points to the Object that is calling the method.
// The this Keyword will point ot matilda if it is matilda who calles the method.
// That's why the this Keyword is dynamic, not static, depending on how the function is called.

const f = jonas.calcAge;
f(); // The this Keyword is undifined because f is a regular function and is not attached to an Object.
