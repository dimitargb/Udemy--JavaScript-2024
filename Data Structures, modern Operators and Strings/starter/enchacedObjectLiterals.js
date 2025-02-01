'use strict';
//Restaurant Data
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //openingHours: openingHours,
  //enchaced Object Literals we just write openingHours, with comma and we still have the Object inside.
  //ES6 enchanced Object Literals
  openingHours,

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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngrediant, ...otherIngrediants) {
    console.log(mainIngrediant);
    console.log(otherIngrediants);
  },
};

// Let's take a look at the restaurant Object, it is an Object literal becuse it has been written using the Object Literal Syntax.
/*ES6 introduced 3 ways, wich makes it easier to write Object Literals like this and we go true them now:
1. Let's have and Object wich is outside this Object -> for example the openeningHours Object
   Now const openingHours is a separate variable outside the restaurant variable.
   In order now to put the openingHours inside the restaurant Object we can write openingHours: openingHours, but we do not
   need to repeat openingHours twice so we just write openingHours, becuse the property Name is exately the same as the variable name from wihc we are getting this new Object   */

console.log(restaurant);

/*2. Second enchancemend to Object Literals is about writing methods, in ES6 we no longer have to create a property
     and set it to function Expression, we can write it in an easier way for exsample the order method!!!
     order(starterIndex, mainIndex) {
     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }, 
    We skip the function expression */

/* 3. Enchancemend is that we now can actually compute property names instaed of having to write them out manually.
      Copmute menas calculate.
      Lets' say we have an array called const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      We can use this array to change the days in the openingHours array*/
