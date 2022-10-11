// SWITCH STATEMENTS
switch (1) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No Match");
}

// ROCK PAPER SCISSORS USING SWITCHES
let playerOne = "rock";
let computer = "paper";

switch (playerOne) {
  case computer:
    console.log("Tie Game");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("Computer wins");
    } else {
      console.log("player wins");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("Computer wins");
    } else {
      console.log("player wins");
    }
    break;
  case "scissors":
    if (computer === "rock") {
      console.log("Computer wins");
    } else {
      console.log("player wins");
    }
}
