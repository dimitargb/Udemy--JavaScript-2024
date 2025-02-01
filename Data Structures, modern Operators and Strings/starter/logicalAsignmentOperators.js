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

// If we set the number of guests to 0
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Jovanni Rossi',
};

// 1. The OR assignment Operator

/*What we want to do now is to set a default number of guests for all the resturant Objects that do not have that property*/

/* The OR Operator assignes a value to a variable, if that variable is currently falsy !!!*/

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10; // OR Logical Assignment Operator
//Exactely what happend here rest2.numGuests variable is currently falsy, the value 10 is assigned!!!
//rest2.numGuests ||= 10; // OR Logical Assignment Operator

// To solve the problem if the numGuests is set to 0, we use the Nullish Assignment Operator ??
// Nullish Assignement Operator
rest1.numGuests ??= 10; // 0
rest2.numGuests ??= 10; // 10

// console.log(rest1);
// console.log(rest2);

// The AND assignment Operator.

// rest1.owner = rest1.owner && '<ANONIMUS/>';
// rest2.owner = rest2.owner && '<ANONIMUS/>';

/* Using the AND assignment Operator.*/
// AND Operator assignes a value to a variable if it is currently truthy
rest1.owner &&= '<ANONIMUS/>'; // is not assigning anything, becuase the variable does not exist
rest2.owner &&= '<ANONIMUS/>'; // is assigning '<ANONIMUS/>', becuse the variable is thruty.
console.log(rest1);
console.log(rest2);
