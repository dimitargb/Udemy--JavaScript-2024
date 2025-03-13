"use strict";

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;

  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");
console.log("Maried Jessica ...", marriedJessica);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

// const marriedJessica = jessica1;
// marriedJessica.lastName = "Davis";

console.log("Before...", jessica1); //lastName: "Williams" is chnaged to "Davis",  "Williams" does not exsist anymore.
console.log("After...", marriedJessica);
/* This is happening becuse when we copy the original jessica Object to marriedJessica, it has actually not cretated a new
Object in the Heap, instead the marriedJessica has the exact same Reffernce as jessica. Now rhe two variables jessica and 
marriedJessica are pointing tp the exact same Object in the Heap. So if we chnage the property marriedJessica.lastName = "Davis"
this wil change the same property in jessica.*/

//Spread Operator - ... Copies all the Properties of jessica Object into a new Object.
/*This way we keep the Original Object unchanged and we can changed the copied Object, which is a new Object in the Heap*/

const jessicaCopy = { ...jessica }; // Shallow Copy(only the first level Copy of the Object)
jessicaCopy.lastName = "Davis";
//jessicaCopy.family.push("Marry");
//jessicaCopy.family.push("John");

/*Because family: ["Alice", "Bob"] is a new Object in an Object a nested Object and the family wil create a Object Refernce in the 
Heap to the family Object. So what we did writing const jessicaCopy = { ...jessica } only copied the first level of the Object but not the nested Object, this is what we call Shallow Copy(only the first level of the Object), the nested Object has not being copied*/

//console.log("Original Object...", jessica); // Both have "Marry" and "John" added to the family.
//console.log("Mutated Object...", jessicaCopy); // Both have "Marry" and "John" added to the family.

/*If we want a complete copy of the entire Object we do the so called Deep Copy(deep clone), thise copies the entire Object
including all the nested Objects. So we use Deep Copy if we want ot manipulate some big Object in our code, while insuring that the original Data will stay the same*/

// Deep copy(deep clone) we use structuredClone function from the brouser and pass the Object that we want to copy:
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Marry");
jessicaClone.family.push("John");

console.log("Original Object...", jessica);
console.log("Mutated Object...", jessicaClone);
