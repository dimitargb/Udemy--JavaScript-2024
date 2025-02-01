'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Creating a new Map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct ✒️'],
  [false, 'Try again :('],
]);
console.log(question);

//Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration on Map using the for Loop:
//Logging the question as well:
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// To get the correct answer from the user let's use a prompt:
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Converting a map to an array:
console.log([...question]);
console.log(question);
console.log('Entries ...', question.entries());
console.log('Keys ...', question.keys());
console.log('Values ...', question.values());
