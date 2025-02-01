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

/* The Optional Chaining Operator checks if the value on the left exists if not retuns undifined !!! */

console.log(restaurant.openingHours.mon?.open); // undifined
console.log(
  restaurant.openingHours.tue?.open ?? 'The restaurant is closed on Tuesday!'
); // 'The restaurant is closed on Tuesday!'

/*Let say that we wanted to get the openenigHours of our restaurant for monday, but this property does not exsist.
Let's pretend we do not know wether the restaurant opens on monday or not*/
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//With the Optional Chaining if a cetain property does not exist, then undifined is retured immediately.
// This is how it works.
// console.log(
//   restaurant.openingHours.mon.open // here we get Error becuse we do not use the Optinal Chaining.
// );
// Optinal Chaining:
console.log(
  restaurant.openingHours.mon?.open // undifined becuse property 'mon' does not exist.
); /* Only the property before ? -> only if mon exist than open will be red.
If not imediatelly unifined will be returned*/

/*Of course we can have muliple Optinal Chainings.*/
console.log(
  restaurant.openingHours?.mon?.open // undifined becuse property 'mon' does not exist.
);

//Example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// 2. Methods:

// Optional chaining on Methods -> we can check if a method exisit before we call it.
/*The Optional Chaining will check if this method exists(order) and if does not the Nullish Operator will return 
  its right-hand side operand 'Method does not exisit' becuse if it does not exist it will be undified and then the 
  Nullish Operator returns his right handside opertant.*/

console.log(restaurant.order?.(0, 2) ?? 'Method does not exisit');
// The Optional Chaining tests if the value on the left side does exists
// If method does not exist the Nullish Operator returns 'Method does not exisit' becuse method is undifined.

// 3. Arrays:

/* We can use it to check if an array is empty */
const users = [{ name: 'Dimitar', email: 'dimi@abv.bg' }];

console.log(users[0]?.name ?? 'This property does not exist!');
/*If only users exist ?(Optional Chaining), then return his name, otherwise return 'This property does not exist!'*/

console.log(users[0]?.age ?? 'This property does not exist!');
