//Operators
// Logical AND operator: &&

// Logical OR operator: ||

// Logical NOT operator: !

// The modulus operator: %

// The equality operator: ==

// The strict equality operator: ===

// The inequality operator: !=

// The strict inequality operator: !==

// The addition assignment operator: +=

//-----------------------------------------------------------------------------------------

//Conditionals...

//if else conditionals

if (light == "green") {
  console.log("Drive");
} else if (light == "orange") {
  console.log("Get ready");
} else if (light == "red") {
  console.log("Dont' drive");
} else {
  console.log("The car is not green, orange, or red");
}
//
var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

//switch statements
switch (light) {
  case "green":
    console.log("Drive");
    break;
  case "orange":
    console.log("Get ready");
    break;
  case "red":
    console.log("Don't drive");
    break;
  default:
    console.log("The light is not green, orange, or red");
    break;
}
//
var day = `Sunday`;
switch (day) {
  case "Monday":
    console.log("Read a book");
    break;
  case "Tuesday":
    console.log("Watch a movie");
    break;
  case "Wednesday":
    console.log("Read a book");
    break;
  case "Thursday":
    console.log("Play basketball");
    break;
  case "Friday":
    console.log("Socialize");
    break;
  case "Saturday":
    console.log("Chill");
    break;
  case "Sunday":
    console.log("Have barbecue");
    break;
  default:
    console.log("There is no such day");
}

//Loops....

//For Loops
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("Counting completed!");

//While Loops
var i = 1;
while (i < 6) {
  console.log(i);
  i++;
}
console.log("Counting completed!");

//Nested Loops
for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
  }
}

//Combining conditionals & loops
for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal");
  } else {
    console.log(i);
  }
}
//
for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}
