const age = 28;
// age >= 18
//   ? console.log(`I'd like to drink wine 🍷`)
//   : console.log(`I'm not allowed ot drink wine yet 😲`);

const drink = age >= 18 ? "wine 🍷" : "water 🚰";
//console.log(drink);
console.log(`I'd like to drink ${age >= 18 ? "wine 🍷" : "water 🚰"}`);

// Challange:

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
const totalValue = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
);
