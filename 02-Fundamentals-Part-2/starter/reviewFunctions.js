const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  //return retirement;
  return `${firstName} retires in ${retirement} years from now.`;
};

// The first thing we are going to do is to covert it to function expression.

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement1 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  const alredyRetired = age - 65;
  //const retirement = retirementAge(birthYear);

  if (retirement > 0) {
    return retirement;
  } else {
    return `Has retired ${alredyRetired} years from now 😏`;
  }
  //return `${firstName} retires in ${retirement} years from now.`;
};

// const result = yearsUntilRetirement(1995, "Dimitar");
// const result1 = yearsUntilRetirement(1992, "Bob");
// console.log(result);
// console.log(result1);

console.log(yearsUntilRetirement1(1991, "Dimitar"));
console.log(yearsUntilRetirement1(1970, "Mike"));
