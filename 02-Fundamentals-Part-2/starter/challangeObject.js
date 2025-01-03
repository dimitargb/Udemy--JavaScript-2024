"strict mode";
// The Challange is to write in the console Jonas has 3 friends and his best friend is called Michael wihtout hardcoding names.

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "John"], // to get the lenght write ${jonas.friends.length !!!
};

// Solition:

const interestedIn = prompt(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age ,job and friends?"
  );
}

// Jonas has 3 friends and his best friend is called Michael.
// To get a number of friends in the array is by writing the array.length.
