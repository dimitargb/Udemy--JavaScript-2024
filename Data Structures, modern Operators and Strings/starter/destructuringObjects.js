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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Calling the orderDelivery function:
restaurant.orederDelivery({
  time: '22.30',
  address: 'Via del Sol 23',
  mainIndex: 2,
  starterIndex: 2,
});
//Calling the orderDelivery function from the defult value which we gave to the function.
restaurant.orederDelivery({ address: 'Via del Sol 23', starterIndex: 1 });

// Here we destructure the Object resturant.

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// If we want the variables name to be diffrent form property names:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

/* Another useful feauture is to have default values for the case we try to read a property which does not exist on the Object:
for example restaurant.menu =  udifined, becuse menu does not exist on the Object, os we can set defaoult values*/

//Adding Default values to a properties that does not exist in the Object:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables:
let a = 12;
let b = 15;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // The trick is to put the in () otherwise it gives Syntax Error
console.log(a, b); // 23, 7
//Basically we override the initial variables, in order to do it we wrap in ()

// Nested Objects destructuring
const {
  fri: { open: o, close: c },
} = openingHours;
//console.log(open, close); // 11, 23
console.log(o, c); // 11, 23
