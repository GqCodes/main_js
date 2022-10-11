let val;

// number to string
val = String(5);
val = String(4 + 4);
// Bool to string
val = String(true);
// Date to a string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello"); // NaN
val = Number([1, 2, 3]); // Nan

val = parseInt("100.56"); // = 100 - convert string to integer
val = parseFloat("100.56"); // = 100.56 convert string to float number (decimals)

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // -> only works on strings
console.log(val.toFixed()); // -> only works on numbers

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
