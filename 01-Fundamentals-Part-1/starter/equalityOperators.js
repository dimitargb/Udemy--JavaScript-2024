const age = "18";
if (age === 18) console.log("You just became an adult 😃");
if (age == 18) console.log("You just became an adult  💯");

// In this case just the secon satetmat will execute because it converts the age to a number

// Using the prompt() function.
const favourite = Number(prompt(`What's is your favorite number?`));
console.log(typeof favourite);

if (favourite === 5) console.log("Cool! This is the right number 😍.");
else if (favourite === 8) console.log("This number is also cool 🤟.");
else console.log("This is not the correct number 😠.");

// const yourNumber = Number(prompt(`What's your favourite number?`));

// if (yourNumber === 12)
//   console.log("Congratulations, this is the right number 👍");
// else console.log("This is not the right number 😠.");

// Diffrent Operator:
if (favourite !== 5) console.log("Why not 23 ?");
