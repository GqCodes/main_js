// ConditionalsL If statements

let soup = "Chicken Noodle soup";
let reply;

if (soup) {
  reply = `Here's your order of ${soup}.`;
} else {
  reply = "sorry were out of soup";
}

console.log();

// Adding to it if customer is banned
let customerIsBanned = false;
if (customerIsBanned) {
  reply = "NO SOUP FOR YOU!";
} else if (soup) {
  reply = `Here's your order of ${soup}.`;
} else {
  reply = "sorry were out of soup";
}

console.log();

// Lets add some crackers
let crackers = true;

if (customerIsBanned) {
  reply = "NO SOUP FOR YOU!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
  reply = `Here's your order of ${soup}.`;
} else {
  reply = "sorry were out of soup";
}

console.log();

// NEW EXAMPLE: TEST SCORES

let testScore = 40;
let grade;
let collegeStudent = false;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  // Nested if statement
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}

console.log();

// NEW EXAMPLE ROCK PAPER SCISSORS
let playerOne;
let computer;

if (playerOne === computer) {
  // tie game!
} else if (playerOne === "rock") {
  if (computer === "paper") {
    // computer wins
  } else {
    // player wins
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    // computer wins
  } else {
    // player wins
  }
} else if (playerOne === "scissors") {
  if (computer === "rock") {
    // computer wins
  } else {
    // player wins
  }
}
