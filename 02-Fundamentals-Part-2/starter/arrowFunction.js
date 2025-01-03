// Function Expression:

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function:

const calcAge3 = (birthYear) => 2037 - birthYear;

// Firts we write the birthyear, then arrow => and then what we want to return.
// This function we want to be bale to use again this function, so we store it like in the function Expression.
// So this is a value birthYear => 2037 - birthYear, that we assign to the  calcAge3 variable!!!
// We saved the retuned value into an variable -> const age3 = calcAge3();
// We console.log this variable to show the result.
const age3 = calcAge3(1995);
console.log(age3);
console.log(calcAge3(1995));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  //return retirement;
  return `${firstName} retires in ${retirement} years from now.`;
};

const result = yearsUntilRetirement(1995, "Dimitar");
const result1 = yearsUntilRetirement(1992, "Bob");
console.log(result);
console.log(result1);

// Here we need to write retun explicitely in order to calculate the result!
