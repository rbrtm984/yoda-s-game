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

let computerChoice = getComputerChoice();

console.log(computerChoice);

function rockPaperScissors (playerSelection, computerChoice) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    if (playerSelection === "rock" && computerChoice === "paper") {
        console.log("it worked");
        return "Paper beats rock! The computer wins.";
    } else if (playerSelection === "rock" && computerChoice === "scissors") {
        console.log("it worked");
        return "Rock beats scissors! The computer wins.";
    } else if (playerSelection === "rock" && computerChoice === "rock"){
        console.log("it worked");
        return "Rock ties rock! No one wins ...";
    } else if (playerSelection === "paper" && computerChoice === "paper") {
        console.log("it worked");
        return "Paper ties paper! No one wins ...";
    }  else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log("it worked");
        return "Scissors beats paper! The computer wins.";
    }  else if (playerSelection === "paper" && computerChoice === "rock") {
        console.log("it worked");
        return "Paper beats rock! The player wins.";
    }  else if (playerSelection === "scissors" && computerChoice === "paper") {
        console.log("it worked");
        return "Scissors beats paper! The player wins.";
    }  else if (playerSelection === "scissors" && computerChoice === "scissors") {
        console.log("it worked");
        return "Scissors ties scissors! No one wins ...";
    }  else if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log("it worked");
        return "Rock beats scissors! The computer wins.";
    };
    return "Please enter either rock paper or scissors friend";
};

console.log(rockPaperScissors("Yoda", computerChoice));