function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    return computerChoice;
}

getComputerChoice();