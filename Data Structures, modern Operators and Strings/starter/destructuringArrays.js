// Retrieving Elements in a normal way.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(c);

// Destructuring- with Destructuring we can declare all the 3 Elements in the same time.
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4;

//Restaurant Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurant.categories;
console.log(first); // Italian
//If we want to get the first and the third Element we simply leave ahole in the distructuring Operator
let [main, , secondary] = restaurant.categories;
console.log(secondary); // Vegetarian

//Switching varaibles using Destructuring
// we reasign the vaue of the 2 variables
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian, Italian they have swithc places

//Recieve 2 returned values from  function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread, Pizza

//Nested Array Distructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // Distructuring an array inside an array
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1
