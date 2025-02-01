'use strict';

// Logical Operators can use any data type, return any data type and they do short-circuiting !!!

/*In the case of OR Operator( || ) short-circuiting  means that if the first value is atruthy value it will
immidiatly return that first value. In oither words if the first Operant is a truthy value, that the other 
Operatnt will not even be evaluated!!!*/

console.log(3 || 'Jonas'); //  First Operant is a truthy value and it returns the first Operant - 3
console.log('' || 'Jonas'); // First Operant is a falsy value and it returns the second Operant - 'Jonas'
console.log(true || 0); // First Operant is a truthy value and it returns the second Operant - true
console.log(undefined || null); // First Operant is a falsy value and it returns the second Operant - null which is a falsy value.

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // It will return first truthy value - 'Hello'

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

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; // if restaurant.numGuests exist = 23, if not = 10;
console.log(guest1);

/*Instead of doing this we can take advantgae of short-circuiting  and OR Operator.*/

const guest2 = restaurant.numGuests || 10; // It will return the first truthy value => restaurant.numGuests = 23
console.log(guest2);

//The AND Operator
console.log(0 && 'Jonas'); // 0 Returns the first falsy value.
console.log(8 && 'Jonas'); // 'Jonas' If first value is thruty and next avlues are truthy, it will retun the last value.

console.log('Hello' && 23 && 'Jonas' && null); // null Because this is the first falsy value.

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

/*Many times we can use the END Operator to avoid an if statemant where all we want to do is to check if a ceratin
property or value exisist */

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
