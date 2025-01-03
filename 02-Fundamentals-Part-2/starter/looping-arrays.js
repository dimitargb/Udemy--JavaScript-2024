"strict mode";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Mihael", "Maria", "John"],
  true,
];

// Now we can loop a for loop to loop true this array. Lets say we want to log individually the Elements to the console.
// We eed to start from 0 becuse the array is 0 based when it comes to reading Elements out of the array.
// This starts form jonas at position i -> typeof jonas[i]

// for (let i = 0; i <= jonas.length - 1; i++) {
//   console.log(jonas[i], typeof jonas[i]);
// }

const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading fron jonas array.
  //console.log(jonas[i]);

  // Filling types array.
  //types[i] = typeof jonas[i];

  // Using the push method
  types.push(typeof jonas[i]);
}

console.log(types);

// What we did here is only to read values from an array, but let in the same time create a new aray containing each type of elemnts. We start by creating a new epmty array outside of the loop called types[];

// Another practical example with filling an empty array:
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
