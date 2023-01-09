
//function to get a random choice for the computer
function getComputerChoice(){
    let values = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * values.length);
    return values[random];
}

//function to get a round of rock, paper, scissors
function playRound(playerSelection, computerSelection){

//coming soon
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
