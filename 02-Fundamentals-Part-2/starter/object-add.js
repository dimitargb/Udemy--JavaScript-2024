"strict mode";

// Adding new property to already exsisting object
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "John"],
};

jonas.location = "USA";
jonas.children = 2;

console.log(jonas["location"]); // USA
console.log(jonas.location); // USA
console.log(jonas.children); // USA
