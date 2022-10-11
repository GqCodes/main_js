/**********
 * FOR EACH - Works just like a for loop without an iterator. Just loops over something and does whatever the function says to do. by itself it doesnt mutate or create a new array. so we create a new variable "double" and push into it.

 **********/
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log("forEach", double);
// this returns [ 2, 4, 20, 32 ]

/*********************
 MAP - FILTER - REDUCE - when you want to do a loop, think about using these methods instead.
 ********************/

// MAP - loops over something just like forEach BUT returns a new array. It EXPECTS a return statement. Doesn't mutate the array, but creates a new array
const mapArray = array.map((num) => num * 2);
console.log("map", mapArray);

// FILTER - this also returns an array. Used to filter an array with a condition. This is like a for loop WITH an iterator
// for ex, retunging all the elements in an array above 5
const filterArray = array.filter((num) => num > 5);
console.log("filter", filterArray);

// REDUCE -
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log("reduce", reduceArray);
