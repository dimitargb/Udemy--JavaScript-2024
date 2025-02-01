'use strict';

/*Map in JS is a Data Structure, that we can use to map values to keys. The Data is stored in  key - value pairs.
In maps the keys can have any type.
In Objects the keys are always strings, but in map we can have any type of key.*/

const restaurantMap = new Map();

/*The easyest way to create a Map is to create an empty Map like the one above, wihtout passing anyting.
  Then to fill up the Map we can use the Set method. Inside we pass 2 agruments:
   1. is the key name and 2. is the name of the restaurant */

// 1. Set Method
restaurantMap.set('name', 'Classico Italiano'); // name of the restaurant
restaurantMap.set(1, 'Firenze, Italy'); // location
restaurantMap.set(2, 'Lisbon, Portugal'); // other location

console.log(restaurantMap.set(2, 'Lisbon, Portugal'));

//Don't forget the value can be anything and we can chain the next Set in the end
restaurantMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// 2. Get Method

//In order to read Data from a Map we use the get method, all we nned to do is to pass the name of the key!!!
console.log(restaurantMap.get('categories')); // ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
console.log(restaurantMap.get(true)); // 'We are open :D
console.log(restaurantMap.get('close')); // 23

const time = 21;
console.log(
  restaurantMap.get(
    time > restaurantMap.get('open') && time < restaurantMap.get('close')
  )
); //'We are open :D', but if time is 10 it would be 'We are closed :('

// 3. Has Method
// Another method is the has method , where we cn check wether if a Map contains a certain key
console.log(restaurantMap.has('categories')); // true, it contains this key word.

// 4. Delete Method
//We can delete Elements based on the key with the delete method.
restaurantMap.delete(2); // the second location has been deleted now

// 5. Size Property
console.log(restaurantMap.size); // It contains 7 items

// 6. Clear Method
//restaurantMap.clear() // removes all the Elements from the map.

// We can use Arrays and Objects as map keys
const arr = [1, 2];
restaurantMap.set(arr, 'Test');
restaurantMap.set(document.querySelector('h1'), 'Heading');
console.log(restaurantMap);
console.log(restaurantMap.get(arr)); // 'Test'
//To get the Data based on the Array
