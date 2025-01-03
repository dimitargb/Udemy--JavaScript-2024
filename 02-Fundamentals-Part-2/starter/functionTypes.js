"strict mode";
// Function Declarations are normal functions, where we use the function keyword to declare a function.
//We want a person's birthyear as an input to this function.

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression:
// Instead a writing a function with calcAge1 name, we basically write function without a name, we still define the
// functions body but we store this function into a varibale. This function is wihout a name and is called anonimus function:

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1983);
console.log(age2);

//Function Declarations we can call the function before we difine it:

function calcAge3(birthYear) {
  return 2037 - birthYear;
}

const age3 = calcAge3(1998);
console.log(age3);

//Function Expression we can not call before the initialisation !!!
