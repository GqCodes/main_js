// Loops

// While Loop
let myNumber = 50;
while (myNumber < 50) {
  console.log(myNumber);
  myNumber++;
}

// DO While Loop - what happens in the do block will happen atleast once

do {
  console.log(myNumber);
} while (myNumber < 50);

// For Loop
let name = "Chris";
for (let i = 0; i <= 10; i++) {
  console.log(name.charAt(i));
}

let name1 = "frank";
let counter = 0;
let myLetter;
while (true) {
  myLetter = name1[counter];
  console.log(myLetter);
  if (myLetter === "n") break;
  counter++;
}
