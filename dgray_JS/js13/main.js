// Functions

// Methods are Built-in Functions

// Function declaration syntax:
function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}

console.log(sum(10));

// 2nd example
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("chris@email.com"));

// annonymous funtions - if name is not provided
const getUserNamesFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNamesFromEmail("frank@email.com"));

// arrow function
const toProperCase = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

console.log(toProperCase("cHRIS"));
