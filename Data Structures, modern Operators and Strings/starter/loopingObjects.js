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

/*Objects are not iterable.
We have diffrent options to loop over the Objects, we can loop over the property names(keys), over values or all togther.*/

const properties = Object.keys(restaurant.openingHours);
console.log(properties); // ['thu', 'fri', 'sat'] -> properties is an array;

/*Let say we want to see how many days the resaurant is open*/
console.log(`We are open on ${properties.length} days`); // We are open on 3 days;

let openStr = `We are open on ${properties.length} days: `;

// 1. Looping over property names(keys):

for (const day of Object.keys(restaurant.openingHours)) {
  //console.log(day); // thu, fri, sat
  openStr += `${day}, `;
}
console.log(openStr); // We are open on 3 days: thu, fri, sat

// 2. Looping over property values:

/* In this case we use Object.values()*/

const values = Object.values(restaurant.openingHours);
console.log(values);

// 3. Looping over Object Entries

const entries = Object.entries(restaurant.openingHours);
console.log(entries); // this transforms the Object into an Array. First we have the key, second we have the value.

/*Now we can use this to loop over the Object*/
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
