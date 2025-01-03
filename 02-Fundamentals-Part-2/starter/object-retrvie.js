"strivt mode";
// 1. Way of getting the property from an object is by using the dot(.) notation.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "John"],
};

console.log(jonas.friends[1]); // Peter

// 2. Brackets notation[]
console.log(jonas["lastName"]); // Schmedtmann

// In the square brackets[] we can put any expression here.
const nameKey = "Name";
const teaching = 20;
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// using the prompt()function
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age ,job and friends?"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age ,job and friends?"
  );
}
