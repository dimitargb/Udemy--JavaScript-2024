'use strict';

const arr = [7, 8, 9];
// And we want to create a new Array adding 1 and 2, based on this array at the beginning.
const theBadNewArray = [1, 2, arr[0], arr[1], arr[2]]; // this is a bad way
console.log(theBadNewArray);

// with the Spread Operator:
const newArray = [1, 2, ...arr]; // good way using the Spread Opertor, with the ... we expand the Array to it's all Elements
const newArray1 = [1, 2, arr]; //[1, 2, arr(3) not using the Spread Operator !!!
console.log(newArray);
console.log(newArray1);
// if we want to log the individual Elements of the newArray:
console.log(...newArray); // 1, 2, 7, 8, 9 individually.

/*Whenever we need the Elements of an array individually, then we can use the Spread Operator.*/

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
};

// Adding new Elements to older Elements from mainMenu using the Spread Operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Creating shallow copies:
const mainMenucopy = [...restaurant.mainMenu]; // shallow copy of the mainMenu.
console.log(`Shallow copy of mainManu: ${mainMenucopy}`);

// Joining 2 arrays or more:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

/*The Spread Operator works on all iterables: all arrays, strings, maps or sets but not Objects!!!*/
// Iterables: arrays, strings, maps, sets, NOT Objects!!

//Using a Spread Operator on strings:
const string = 'Jonas';
const letters = [...string, ' ', 'S'];
console.log(letters);

/*Let's write our own function tah exepts muliple Argumnets and use the Spread Operator to pass those arguments, so we
create a new method called orderPasta and the pasta always needs to have exactely 3 ingridints*/

const ingridients = [
  //   prompt("Let's make pasta! Ingrediant 1?"),
  //   prompt("Let's make pasta! Ingrediant 2?"),
  //   prompt("Let's make pasta! Ingrediant 3?"),
];
console.log(ingridients);
// and now how should we call the orderPasta function?
//restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]); // old way of calling a function
// using the Spread Operator to call the Elements form a function.
restaurant.orderPasta(...ingridients); // Here is your delicious pasta with a, b and c.

/*Since the ES2018 the Spread Operator works on Objects as well, even Objects are not iterables*/
//Objects:
// We can basically spread all the Elements form restaurant Ojects and add anything we want
const newRestaurant = {
  foundetIn: 1998,
  ...restaurant,
  founder: 'Dimitar Damianov',
};
console.log(newRestaurant); // this is a new Object with new property founder

/*Since we can do shallow copies on arrays using the Spread Operator, we can od the same with Objects.*/
const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Roma Restorante';
console.log(restaurant.name);
console.log(restaurantCopy.name);
