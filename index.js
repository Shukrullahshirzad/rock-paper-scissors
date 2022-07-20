const username = document.querySelector(".username");
const comScore = document.querySelector(".comScore");
const userScore = document.querySelector(".userScore");
const userChoice = document.querySelector(".user .choices");
const startGame = document.querySelector(".startGame");


function computerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return(choice[Math.floor(Math.random()*3)])
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats Paper"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors"
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beats Paper"
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock"
    }
    if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats Scissors"
    }
    else{
        return "Draw"
    }
}

function game(){
    console.log("game started")
    for(let i = 1; i <= 5; i++){
        userChoice.addEventListener("click", (e)=>{
        let userInput = e.target.value;
        console.log(e.target.value);
        playRound(userInput, computerChoice())
        console.log(playRound(userInput, computerChoice()))
        })
        
    }
    return "you win the game"
}

startGame.addEventListener("click", game())

