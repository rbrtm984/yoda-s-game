function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    };
    
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return "Paper beats rock! The computer wins.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return "Rock beats scissors! The player wins.";
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        playerScore += 1;
        return "Rock ties rock! No one wins ...";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Paper ties paper! No one wins ...";
    }  else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return "Scissors beats paper! The computer wins.";
    }  else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "Paper beats rock! The player wins.";
    }  else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "Scissors beats paper! The player wins.";
    }  else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Scissors ties scissors! No one wins ...";
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "Rock beats scissors! The computer wins.";
    };
    return "Please enter either rock paper or scissors friend";
};

let computerScore = 0;

let playerScore = 0;

function game() {
    let playerSelection = prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round one over! The score is now player: ${playerScore} computer: ${computerScore}`);
    playerSelection = prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round two over! The score is now player: ${playerScore} computer: ${computerScore}`);
    playerSelection = prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round three over! The score is now player: ${playerScore} computer: ${computerScore}`);
    playerSelection = prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round four over! The score is now player: ${playerScore} computer: ${computerScore}`);
    playerSelection = prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round five over! The score is now player: ${playerScore} computer: ${computerScore}`);
    if (computerScore > playerScore) {
        console.log("The computer wins!");
    } else if (playerScore > computerScore) {
        console.log("The player wins");
    } else {
        console.log("It's a tie");
    }
}

//console.log(`Computer choice is: ${computerSelection}`);

//console.log(`Player choice is: ${playerSelection}`);

// console.log(playRound(playerSelection, computerChoice));

game();