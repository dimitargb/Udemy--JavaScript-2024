"strict mode";
// Adding a function to our object
// We will add the clacAge() function.
// We add the function name as a property and we specify the function as an expression.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "John"],
  hasDriversLicence: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },
  calcAge: function () {
    // console.log(this); // this is the whole jonas Object
    this.age = 2037 - this.birthYear; // using this keyword and cteating new Property called age.
    return this.age;
  },
};

console.log(jonas.calcAge()); // we dont need to pass 1991 becuse this keyword is pointing to the object jonas and after the dot
//is refferencing the birthyear.

// the calcAge property:
//console.log(jonas.calcAge(1991)); // 46
//console.log(jonas["calcAge"](1991)); // 46 - using bracket notation
jonas.children = 3;
// So any function that is attached to an Obejst is called a method.
//console.log(jonas);

// Using this keyoword in the function calcAge()to replace the birthYear.
// Insted we can use the this keyword also to store a new property.
// We can store the age this way:  this.age = 2037 - this.birthYear and we create a new proeprty called age.
// We can smply return this.age.

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
