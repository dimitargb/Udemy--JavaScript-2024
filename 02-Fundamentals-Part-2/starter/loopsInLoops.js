// How to loop backwards

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Mihael", "Peter", "John"],
];

// In this case we want to loop form last element to first.
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// How to create a loop inside of a loop.
// We want to loop true 3 diffrent exercises and print them in the console:

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------Starting exercise ${exercise}`);

  for (let repetition = 1; repetition <= 5; repetition++) {
    console.log(
      `Exercise ${exercise} Lifing weight repetition ${repetition} 🏋️`
    );
  }
}
