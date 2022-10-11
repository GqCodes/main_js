// FIRST INTERACTIVE GAME ROCK PAPER SCISSORS

let playGame = confirm("Shall we play Rock, Paper, Scissors");

if (playGame) {
  // play game
  let playerChoice = prompt("Please enter rock paper or scissors");
  if (playerChoice) {
    // if the player makes a choice
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
      let result =
        playerOne === computer
          ? "Tie game"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne} \n Computer: ${computer} \n Computer wins!`
          : `playerOne: ${playerOne} \n Computer: ${computer} \n Player wins!`;
      alert(result);
      let playAgain = confirm("Play Again");
      playAgain ? location.reload() : alert("Ok, thanks for playing");
    } else {
      alert("test");
    }
  } else {
    alert("I guess you changed your mind");
  }
} else {
  alert("Ok maybe next time");
}
