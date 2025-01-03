"strict mode";

function logger() {
  console.log("My name is Dimitar.");
}

// This process here is called invoking a function, running or calling the function.
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}
// If we want to use the value that we retuned we need to store it in a variable -> const appleJuice
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// We can log it directly to the console, without the capturing the value
console.log(fruitProcessor(5, 0));

// Now we can reuse the function with diffrent input values and get a diffrent output.
const appleAndOrangeJuice = fruitProcessor(2, 3);
console.log(appleAndOrangeJuice);
