// 5.FindLast and FindLastIndex Methods, they are the same as find and findIndex Methods, but theysearch from the last Element.

/* FindLast Method:    */
console.log(movements);
const lastWithdrowal = movements.findLast(el => el < 0); // it means finding the last value that is less then 0
console.log(lastWithdrowal); // - 130 is the last Withdrowal

/* FindLastIndex Method: this method is like the findIndex method 
    
The findLast and findLastIndex methods are very useful when dealing with sorted Data and are interested in getting the most recent occurance in the array. So to find the last occurance or the most recent occurance is usefull to start looking form the end and there is the findLast and findLastIndex very useful. */

// Exsample :'Your lates large movement was X movements ago'

const latesLargMovementIndex = movements.findLastIndex(
  el => Math.abs(el) > 2000
);
console.log(latesLargMovementIndex);

// And now let's use this value to log the string form the exsample to the console:
console.log(
  `Your lates large movement was ${
    movements.length - latesLargMovementIndex
  } movements ago`
); //   Your lates large movement was 5 movements ago
