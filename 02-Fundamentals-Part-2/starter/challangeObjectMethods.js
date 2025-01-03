// Challange - write a function and add it to the obejct: 'Jonas is a 46 years old techer and he has a driver's licence.'
"strict mode";

// Solution:

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "John"],
  hasDriversLicence: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear; // using this keyword and cteating new Property called age.
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDriversLicence ? "a" : "no"} drivers's licence.`;
  },
};

console.log(jonas.getSummary());
console.log(jonas);
