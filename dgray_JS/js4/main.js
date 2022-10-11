// Numbers

// an integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float
const myFloat = 42.05;

const myString = "42";

// Can change a string to a number using the Number function
console.log(Number(myString) + 3);

// Number methods
// The Number.isInteger() method determins wheteher the passed value is an integer.
console.log(Number.isInteger(myFloat));

// The number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the arguement, it returns nan. When parsing, it removes non numbers & converts what it can to a number: a sting of "42.123abc" would be a number data type of 42.123
console.log(Number.parseFloat(myString));

// Number.parseInt() method parses a string arguement & returns an integer
console.log(Number.parseInt(myString));

// toString() method returns a string representing the number.
console.log(myFloat.toString());
