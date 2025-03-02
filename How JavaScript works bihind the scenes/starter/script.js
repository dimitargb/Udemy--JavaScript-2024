'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating a NEW varable with same name as outer scope's variable;
      const firstName = 'Steven';

      //Reassigning scoep's variable;
      output = 'NEW OUTPUT!';

      const string = `Oh, and you are a millenial, ${firstName}.`;
      console.log(string);

      function add(a, b) {
        return a + b;
      }
      //console.log(add(4, 7));
    }
    //console.log(string); // Refference Error caont and let are available only inside a block scope.
    console.log(millenial); // It will work because the var variable are function scoped, it will ignore the block scope.

    //  console.log(add(4, 7)); // Refference Error, you can not call a function outseid a block-scope in a strict mode.
  }
  printAge();

  return age;
}

const firstName = 'Dimitar';
calcAge(1991);

//console.log(age); // Reffernece Error beciuse we can not access the inner scope just the outer scope.

//printAge(); // Reffernece Error beciuse we can not access the inner scope just the outer scope.
// In the Global Scope we dont have access to any variables in any other scope.
