// If we want to convert a vlue to Boolean we use the Boolean() function.
console.log(Boolean("")); // false
console.log(Boolean("Win")); // true
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(8)); // true
console.log(Boolean({})); // true

const money = 0;

if (money) {
  console.log(`Don't spend it all!`);
} else {
  console.log("You should get a job!");
}

let hight;
if (hight) {
  console.log("Hight is DEFINED");
} else {
  console.log("Hight is UNDEFINED");
}

// Result is 'Hight is UNDEFINED' because hight is undefined, that's why the else statement is executed.
