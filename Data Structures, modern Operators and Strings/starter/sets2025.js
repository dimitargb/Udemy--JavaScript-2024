'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// We need to find out wich ingridents are presetn in both Italian and Mexican Food

// 1. Intersection Method:
const commonFoods = italianFoods.intersection(mexicanFoods); // this will find the intersection between italianFood / mexicanFoods
console.log('Intersection Method :', commonFoods); // { 'tomatoes', 'garlic' } this is a new Set presetn in both Sets.

/* If we want to convert it to an array we use the ... spread Operator */
console.log([...commonFoods]); // converitng to array ['tomatoes', 'garlic']

// 2. Union Method:
/* This method will give us laa the Elements present in either of the Sets, all the Elemenst of all Set,s without duplicats. */
const italianMexicanFood = italianFoods.union(mexicanFoods);
console.log('Uninon Method :', italianMexicanFood); // all the Elements form Italian and Mexiac food without duplicates
console.log([...italianMexicanFood]); // converting it into an array.

console.log(new Set([...italianFoods, ...mexicanFoods])); // this is the same without using the union method!!!

// 3. Difference Method:
/* This method gives us all the Elements that are unique in the first Set */
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian: ', uniqueItalianFoods); // unique Italian Foods ingrediants

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican: ', uniqueMexicanFoods); // unique Mexican Foods ingrediants

// 4. Symmetric Difference Method
/* This method will give us all the Elements present in either Set, but not in both. It will give us the unique Italian
   Foods + the unique Mexican Foods*/
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric Difference Method : ', uniqueItalianAndMexicanFoods); // all Elements without 'tomatoes' and 'garlic'.

// 5. isDisjointFrom Method
/* With this method we can check if one Set doas not contain any Elements of the other Set*/
console.log(italianFoods.isDisjointFrom(mexicanFoods)); // false
