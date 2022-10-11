// Arrays

const myArray = [];

// add elements to an array
myArray[0] = "chris";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// lenghth
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

// refer to a specific position in an array
console.log(myArray[1]);

// add to an array
myArray.push("school");
console.log(myArray);

// remove from array
const lastItem = myArray.pop();
console.log(lastItem);

// add to front of an array
myArray.unshift("42");
console.log(myArray);

// remove from the front of array
myArray.shift();
console.log(myArray);

// delete removes an item but keeps its position in the array as an empty array item
delete myArray[1];
console.log(myArray);

// splice allows us to remove more specificially defining the items we want to remove by their position
myArray.splice(1, 1); //add a third arg to replace the removed item
console.log(myArray);

// splice can also add an arg to a specified position in an array
myArray.splice(1, 0, 42);
console.log(myArray);

// slice cuts off from a starting & end point instead of just
const newArray = ["a", "b", "c", "d", "e", "f"];
const newerArray = newArray.slice(2, 5);

console.log(newerArray);

// reverse does what it says - reverses the order
newArray.reverse();
console.log(newArray);

// join combines all the elements in the array
const newString = newArray.join();
console.log(newString);

// split used to split by whatever is passed in
newString.split(",");

// concat joins to arrays into one
const myArrayA = ["a", "b", "c"];
const myArrayB = ["d", "e", "f"];

const newestArray = myArrayA.concat(myArrayB);
console.log(newestArray);

// spread operator newer way to combine arrays
const myArrayC = [...myArrayA, ...myArrayB];
console.log(myArrayC);

// nested arrays
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShlefA = ["tank tops", "t-shirts", "jerseys"];
const clothesShlefB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
// or
console.log(clothesShlefB[0]);

// the extra bracket is used to acces an elem from a nested array this is a 2 dimesional array
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShlefA, clothesShlefB];
console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

// 3 dimension array
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
