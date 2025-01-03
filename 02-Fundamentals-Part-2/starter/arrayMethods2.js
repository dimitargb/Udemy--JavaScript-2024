const friends = ["Mihael", "Peter", "John", "Jay"];
console.log(friends.indexOf("Jay")); // 3;

// this will return the index in wich this Element is located.
// if we try with an Element which is not in the array we will get -1;
console.log(friends.indexOf("Harry"));

// -1 means this Element is not in the array!

// Another method is inludes method.
// Includes method -> will return true if the Element is in the Array and false if is not inside.

console.log(friends.includes("Pirelli")); // false
console.log(friends.includes("Jay")); // true

// This method ueses strict equality for this check.

friends.push(23);
console.log(friends.includes("23")); // false because is strict equality and not type coarsion.
console.log(friends.includes(23)); // true  becuse both are numbers.

// We can use this mthod to write conditionals, that's one of the very useful application of this method.
if (friends.includes("Steven")) {
  console.log("You have a friend called Peter.");
} else {
  console.log("You dont have a friend with such name.");
}
