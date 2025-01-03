"strict mode";
const calcAvarage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAvarage(44, 23, 71);
let scoreKoalas = calcAvarage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins....");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAvarage(85, 54, 41);
scoreKoalas = calcAvarage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
