"use strict";
// Exsample if we make a mistake, we will get an Error message sayinf that this word is undefined.
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 😃");

//Another thing that Strict Mode does is to intriduce a short list of variable names that are reserved for.
// Exsample of a reserved variable:

// const interface = "Audi";
// const private = "private";

function countAnimalPerFamily(familyName, cats, dogs, hamster) {
  const animalsPerFamily = `${familyName} has ${dogs} dogs, ${cats} cats and ${hamster} hamster as well 😃`;

  return animalsPerFamily;
}

const adamsFamily = countAnimalPerFamily("Adamsfamily", 2, 1, 0);
console.log(adamsFamily);

const bebaFamily = countAnimalPerFamily("Bebafamily", 2, 3, 1);
console.log(bebaFamily);
