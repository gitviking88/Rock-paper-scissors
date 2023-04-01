function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    if (computerSelection === playerSelection) {
     return "it's a tie"; 
    }

    switch (true){
        case (computerSelection === "paper" && playerSelection === "rock") :
        case (computerSelection === "rock" && playerSelection === "scissors") :
        case (computerSelection === "scissors" && playerSelection === "paper") :
            return "You Lose," + " " + computerSelection + " beats " + playerSelection + ".";
            break;
        default :
            return "You Win," + " " + playerSelection + " beats " + computerSelection +".";
    }



    // if (
    //     (computerSelection === "paper" && playerSelection === "rock") || 
    //     (computerSelection === "rock" && playerSelection === "scissors") || 
    //     (computerSelection === "scissors" && playerSelection === "paper")
    //     ) 
    // {
    //     return "You Lose," + " " + computerSelection + " beats " + playerSelection + ".";
    // } 
    // if (
    //     (playerSelection != "rock") ||
    //     (playerSelection != "paper") ||
    //     (playerSelection != "scissors")
    //     )
    // {
    //     console.log("Player select: " + playerSelection)
    //     return "Error, please type either 'rock', 'paper' or 'scissors'";
    // }
    // return "You Win," + " " + playerSelection + " beats " + computerSelection +".";
    
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;   
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
            while (!["rock", "paper", "scissors"].includes(playerSelection)) {
                playerSelection = prompt("Invalid input. Please choose Rock, Paper or Scissors").toLowerCase();
            }
            const computerSelection = getComputerChoice().toLowerCase();
            console.log("Player: " + playerSelection);
            console.log("Computer: " + computerSelection);
            let winner = playRound(playerSelection, computerSelection);
            console.log(winner);
            if (winner.charAt(4) === "W") {
            scorePlayer++;
            } else if (winner.charAt(4) === "L") {
            scoreComputer++;
            } else if (winner.startsWith("Error")) {
                i + 0;
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