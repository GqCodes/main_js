// String

const name1 = "Jeff";
const name2 = new String("Jeff");

name2.foo = "bar";
console.log(name2);

name === "Jeff" ? console.log(Yes) : console.log(No);

// NUmber
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = (x, y) => x + y;

const getSum2 = new Function("x", "y", "return 1+1");

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// RegEx
const re1 = /\w+/;
const re2 = new RegExp("\\w=");

console.log(re2);
