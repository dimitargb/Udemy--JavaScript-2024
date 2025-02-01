'use strict';
//Restaurant Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orederDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20.22',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ingridient1, ingridient2, ingridient3) {
    console.log(
      `Here is your delicious pasta with ${ingridient1}, ${ingridient2} and ${ingridient3}.`
    );
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

// 1. Destructuring

// Spread Operator becuse we are using it on the right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//Rest Patern
//Here is the Rest Syntax becuse is on the left sife f the assignment =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1, 2, [3, 4, 5]
console.log(others); // [3, 4, 5]

/*It is called Rest Operator becuse it will take the rest of the Elments of the array and then put them into a new Array.
others is a new array.*/

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
// Now lets do the rest Operator in Objects, the remaining Elements will be collected into a new Object.
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. Functions with rest Operator
/* The rest syntax is taking mulitple numbers and packed them all inot one array [5, 2, 4, 7, 9]*/
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 2, 4, 7, 9); // [5, 2, 4, 7, 9]

const x = [23, 5, 7];
add(...x); // using Spread Operator

/*With the Rest Syntax we pack Elements together, with the rest we expand Elements.*/

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms , ['onion', 'olives', 'spinach'] otherIngerdiants

//Important !!!

/*The Spread Operator is used where we would otherwise write values separated by comma !!!
The Rest Pattern is used where we would otherwise write variable names separated by comma !!! */

// Function coverting the first letter to capital letter !!!
function converting(names) {
  const namesArray = names.split(' ');
  const convertedNames = [];
  //console.log(namesArray);

  for (const name of namesArray) {
    //console.log(name[0]);
    //convertedNames.push(name[0].toUpperCase() + name.slice(1));
    convertedNames.push(name.replace(name[0], name[0].toUpperCase()));
  }
  console.log(convertedNames.join(' '));
}
converting('dimitar damianov');
converting('ann nicole smith');
