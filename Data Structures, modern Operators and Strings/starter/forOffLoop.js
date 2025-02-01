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

// Loop over intire manu:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

/*This is because the item variable is the allways the current Element in each iteration.*/
for (const item of menu) {
  console.log(item); // Here we got all Elements individually loged - 'Focaccia', 'Bruschetta', 'Garlic Bread' ......
}

/*In the For Off Loop we can still use the continue and break keywords !!!
In the For Off Loop is a pain if we need the index not the Element, becuse this Loop is ment to give you the 
current Element, but you still can get both, but you have to do it like this:*/

for (const item of menu.entries()) console.log(item); //[0, 'Focaccia'], [1, 'Bruschetta' ], [2, 'Garlic Bread' ]
// Each of the item is now an array of the index and the Element itself.

console.log(...menu.entries()); // This is an Array wich contains the index number and the Element of the original array.

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); //1: Focaccia;  2: Bruschetta; 3: Garlic Bread -> old way
}
console.log('------------------------------------');
// Desctructuring item in [i, el]
for (const [i, el] of menu.entries()) {
  console.log(`${[i + 1]}: ${[el]}`); //1: Focaccia;  2: Bruschetta; 3: Garlic Bread -> new way
}
