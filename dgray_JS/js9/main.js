// TERNARY OPERATOR
// SYNTAX
// consition ? ifTrue : ifFalse;

// Soup
let soup = "chicken soup";
let response = soup ? "Yes, we have soup." : "sorry, no soup today";

console.log();

// "NO SOUP!"
let isCustomerBanned = false;
let soupAcces = isCustomerBanned ? "Sorry, NO SOUP FOR YOU!" : soup ? `Yes, we have ${soup}` : "Sorry no soup";

console.log();

// TEST SCORES
let testScore = 99;
let myGrade = testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "c" : testScore > 59 ? "d" : "F";

console.log(`My test grade is a ${myGrade}`);

// ROCK PAPER SCISSORS
let playerOne = "rock";
let computer = "rock";
let result =
  playerOne === computer
    ? "Tie Game"
    : playerOne === "rock" && computer === "paper"
    ? "compuer wins"
    : playerOne === " paper" && computer === "scissors"
    ? "compuer wins"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins"
    : "player wins";

console.log(result);
