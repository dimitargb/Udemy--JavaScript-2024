// 1. Type Conversion

const inputYear = "1991";
console.log(inputYear + 10); // this way we concatenate becuse inputYear  is a string.

// Converting a string to a Number:
console.log(Number(inputYear) + 10);
console.log(typeof String(5));

// Converting a Number to a String:

console.log(String(5));

// 2. Type Coercion:
console.log("I'm" + " " + 23 + " years old.");
// the + here triggers a coercion. The + Operator will convert Numbers to Strings.
// Whenever there is an operation between a String and a Number the Number wil be converted to a String.

console.log("23" - "10" - 3);
// The (-) Operator will convert Strings to Numbers.

console.log("25" * 2);
console.log("50" / 2);
