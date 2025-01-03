// Continue means to exit the current iteration of the loop and coninue to the next one.

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Mihael", "Maria", "John"],
  true,
];

console.log("----------ONLY STRINGS--------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

// Lets say for some reason we only want to print Elemnts that are strings. The Continue statement is perfect
// for this becuse with it we can exit the current iteration of the loop.
// if jonas[i] !== "string" is not a string then continue;
// This way we only get strigs now.
// In other words ignore Elements that are not strings!!!

// Break menas to completely terminate the whole loop, not just the current iteration.
// What we want to do now is to log no other elements after we found a number!!! After the number nothing else should be printed.

console.log("----------BREAK WITH NUMBER--------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
