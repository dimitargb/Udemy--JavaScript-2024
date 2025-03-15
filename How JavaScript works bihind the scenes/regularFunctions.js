"use strict";

//var firstName = "Marina";

const jonas = {
  firstName: "Dimitar",
  year: 1991,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //SOLUTION 1
    // const self = this;
    // const isMilenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMilenial();

    //SOLUTION 2

    const isMilenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMilenial();
  },

  great: () => {
    console.log(`Hey ${this.firstName}`); // 'Hey undifined', becuse arrow function don't have their own this Keyword .
    // if var firstName = "Marina" then -> 'Hey Marina', becuse arrow function don't have their own this Keyword and the this
    // points to their parent, in this case the global scope -> var firstName = "Marina".
  },
};
// Always use regular functions, not arrow functions.
jonas.great();
jonas.calcAge();

//Exsample of a function inside a method:
