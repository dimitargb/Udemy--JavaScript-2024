const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const isTired = false;
console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Dimitar is able to drive.");
} else {
  console.log("Someone else should");
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 94 + 110) / 3;

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreDolphins < scoreKoalas) console.log("Koalas win the trophy");
else if (scoreDolphins === scoreKoalas) console.log("Both win the trophy");

// Bonus 1
const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 106) / 3;

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100)
  console.log("Dolphins win the trophy");
else if (scoreDolphins1 < scoreKoalas1 && scoreKoalas1 >= 100)
  console.log("Koalas win the trophy");
else if (
  scoreDolphins1 === scoreKoalas1 &&
  scoreDolphins1 >= 100 &&
  scoreKoalas1 >= 100
)
  console.log("Both win the trophy");
else console.log("No one wins the thropy 😢");
