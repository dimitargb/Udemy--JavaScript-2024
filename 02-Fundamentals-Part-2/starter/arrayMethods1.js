// 1. Add Elements to the array:
const friends = ["Mihael", "Peter", "John"];

// Push method adds Elements to the end of the array
friends.push("Jay");
console.log(friends); // ["Mihael", "Peter", "John", "Jay"];

// this mutates the original array
//Since push is a function here it can also return something. The push function does return a value and the value that it
//retirns is the length of the new array.
//So if we want to capture that value we can create a new variable for that.

const newLength = friends.push("Pappy");
console.log(newLength);

// Unshift method adds Elements to the beginning of the array.
// Just like the push method, the unshift method also returns the lenght of the new array.
friends.unshift("Tony");
console.log(friends);

const arrayLength = friends.unshift("Ema");
console.log(arrayLength);

//2. Remove elements form array:
// Pop method -> will remove the last Element of the array.
// This method will return waht was removed.
friends.pop();
console.log(friends);
const popMethod = friends.pop();
console.log(popMethod);

// Shift method -> removes the first Element of the array:
// This method will return waht was removed.
friends.shift();
console.log(friends);
