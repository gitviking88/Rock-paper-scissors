function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
     return "it's a tie"; 
    } else if (
        (computerSelection === "paper" && playerSelection === "rock") || 
        (computerSelection === "rock" && playerSelection === "scissors") || 
        (computerSelection === "scissors" && playerSelection === "paper") 
        ) 
    {
        return "You Lose," + " " + computerSelection + " beats " + playerSelection + ".";
    } else {
        return "You Win," + " " + playerSelection + " beats " + computerSelection +".";
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;   
        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
            const computerSelection = getComputerChoice().toLowerCase();
            console.log(playerSelection);
            console.log(computerSelection);
            let winner = playRound(playerSelection, computerSelection);
            console.log(winner);
            if (winner.charAt(4) === "W") {
            scorePlayer++;
            } else if (winner.charAt(4) === "L") {
            scoreComputer++;
            }
        }
    if (scorePlayer === scoreComputer) {
        console.log("You are tied, your score is" + scorePlayer + " and the computer score is " + scoreComputer);
    } else if (scorePlayer > scoreComputer) {
        console.log("You are the winner, your score is " + scorePlayer + " and the computer score is " + scoreComputer);
    } else {
        console.log("You have lost the game, your score is " + scorePlayer + " and the computer score is " + scoreComputer);
    } 
}

console.log(game());