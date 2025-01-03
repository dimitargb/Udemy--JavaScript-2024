"strict mode";

// Exercise:
function calcAge(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// With the calcAge1 function we want to calculate the age of the first, second and last Element:

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3); // 47, 70, 19

// Now we can transfer it to array:
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Here we have new array wi with the values -> 47, 70,19
// So basically we can place functions calls in an array becuse they will produce a value.
