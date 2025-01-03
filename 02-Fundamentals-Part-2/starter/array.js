"strict mode";
// Literal syntax of creating arrays:
const friends = ["Mihael", "Peter", "John"];
console.log(friends);

//new way of creating Arrays:
const years = new Array(1991, 1984, 1987);

console.log(years);

// lets say we want to log the 1st element from the friends array:
console.log(friends[0]); // Mihael
//console.log(friends[2]); // John

//console.log(friends.length); // This shows the exact amount of Elemnts that are in the array.

//We can use length to get automatically the last Element of any array.
console.log(friends[friends.length - 1]); // the index of the last element of the array .

// If i want to replace 'Peter' with another friend we can change or mutate the array
//friends[1] = "Maria";
//console.log(friends); // ["Mihael", "Maria", "John"]

// we can not replace the entire friends array:
//friends = ["Bob", "Nick"];
//console.log(friends); // this is not !

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);
