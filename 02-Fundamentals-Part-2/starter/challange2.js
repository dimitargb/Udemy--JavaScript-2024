"strict mode";
const caclTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) return billValue * 0.15;
  else {
    return billValue * 0.2;
  }
};

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

const bills = [125, 555, 44];
const tip = [caclTip(bills[0]), caclTip(bills[1]), caclTip(bills[2])];
const totals = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
console.log(tip);
console.log(totals);
