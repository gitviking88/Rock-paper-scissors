function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
    
}

const playerSelection = "Rock".toLowerCase();
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
        return "You lose";
        }
    else if (computerSelection === "scissors" && playerSelection === "rock")
    {
        return "Congratulations, You Win!"    
    }
    }
   
  console.log(playRound(playerSelection, computerSelection));