"use strict";
// argumentsKeyword not just this Keyword.
//The Arguments Keyword, just as the this Keyword is only available in regular functions.

// arguments Keyword
const addExpression = function (a, b) {
  console.log(arguments); // this can be useful when we need a function to accept more parameters then we specify.
  return a + b;
};
addExpression(2, 3);
addExpression(1, 2, 3, 4); // adding more arguments than we specify.

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4); // udifined becuse arguments Keyword only exsist in regular functions
