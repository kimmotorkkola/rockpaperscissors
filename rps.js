
//function to get a random choice for the computer
function getComputerChoice(){
    let values = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * values.length);
    return values[random];
}

//function to get a round of rock, paper, scissors
function playRound(playerSelection, computerSelection){

    if(computerSelection === playerSelection){

        return `It's a tie! Both chose ${playerSelection}`

    } else if(playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "scissors" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "scissors"){

        return `You Lost! ${computerSelection} beats ${playerSelection}`}

     else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock"){

        return `You Won! ${playerSelection} beats ${computerSelection}`}
            }



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
