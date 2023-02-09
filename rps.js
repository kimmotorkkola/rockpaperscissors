
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
        //computerScore++;
        return `You Lost! ${computerSelection} beats ${playerSelection}`}

     else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock"){
        //userScore++;
        return `You Won! ${playerSelection} beats ${computerSelection}`}
            };

//finding a playerSelection and triggering the game
const choiceBtns = document.querySelectorAll(".choiceBtn");

choiceBtns.forEach(button => button.addEventListener("click", () => {

    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    
}))

//let userScore = parseInt(0);
//let computerScore = parseInt(0);

//Loop to play 5 rounds and declare a winner
/*for(let i = 0; i < 5; i++){
let playerSelection = prompt("Choose rock, paper or scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
console.log("Your score = " + userScore);
console.log("Computer's score = " + computerScore);
}*/


//Print out a winner of the best of 5
/*if (computerScore > userScore){
    console.log("Computer wins the best of 5!");
} else if(userScore > computerScore){
    console.log("You win the best of 5!");
}else{
    console.log("Best of 5 is a tie!");
}*/
