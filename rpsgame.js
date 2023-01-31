function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
    
}

const playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
console.log(computerSelection);
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
     return "it's a tie"; 
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") || 
        (computerSelection === "rock" && playerSelection === "scissors") || 
        (computerSelection === "scissors" && playerSelection === "paper") 
        )
        {
        return "You Lose," + " " + computerSelection + " beats " + playerSelection + "."
        }
    else
    {
        return "Congratulations, You Win," + " " + playerSelection + " beats " + computerSelection +".";
    }
    }
   
  console.log(playRound(playerSelection, computerSelection));

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;   
  for (let i = 0; i < 5; i++) {
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner);
    if (winner.charAt(4) === "W") {
        scorePlayer++;
    } else if (winner.charAt(4) === "L") {
        scoreComputer++;
  }
}
 if (scorePlayer === scoreComputer) {
    return "You are tied";
 } else if (scorePlayer > scoreComputer) {
    return "You are the winner";
 } else {
    return "You have lost the game";
 }

} 

game();
console.log(game);