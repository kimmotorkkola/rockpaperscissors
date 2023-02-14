const results = document.querySelector('#results');
const winner = document.querySelector('#winner');

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
        computerScore++;
        return `You Lost! ${computerSelection} beats ${playerSelection}`}

     else if(playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock"){
        userScore++;
        return `You Won! ${playerSelection} beats ${computerSelection}`}
            };

//finding a playerSelection and triggering the game
const choiceBtns = document.querySelectorAll(".choiceBtn");

choiceBtns.forEach(button => button.addEventListener("click", () => {
    if(results.hasChildNodes()){
        results.removeChild(results.children[0]);
    } 
    if(winner.hasChildNodes()){
        winner.removeChild(winner.children[0]);
    }
    const playerSelection = button.textContent;
    const computerSelection = getComputerChoice();
   // console.log(playRound(playerSelection.toLowerCase(), computerSelection));

    const newResult = document.createElement('div');
    newResult.classList.add('newResult');
    
    newResult.innerHTML = `<h2>${playRound(playerSelection.toLowerCase(), computerSelection)}</h2>
    <p> Your score = ${userScore} </p>
    <p> Computer's score = ${computerScore}</p>`; 
    results.appendChild(newResult);

    const newWinner = document.createElement("h1");
    newWinner.classList.add('newWinner');

    if (computerScore === 5){
        newWinner.innerHTML = "Computer wins the best to 5!";
        winner.appendChild(newWinner);
    } else if(userScore === 5){
        newWinner.innerHTML = "You win the best to 5!";
        winner.appendChild(newWinner);
    }else{
        newWinner.innerHTML = "Who will win Best to 5?";
        winner.appendChild(newWinner);
    }
    
}));

let userScore = parseInt(0);
let computerScore = parseInt(0);

//Loop to play 5 rounds and declare a winner
/*for(let i = 0; i < 5; i++){
let playerSelection = prompt("Choose rock, paper or scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
console.log("Your score = " + userScore);
console.log("Computer's score = " + computerScore);
}*/


//Print out a winner of the best to 5
/*if (computerScore === 5){
    console.log("Computer wins the best to 5!");
} else if(userScore === 5){
    console.log("You win the best to 5!");
}else{
    console.log("Who will win Best to 5?");
}*/
