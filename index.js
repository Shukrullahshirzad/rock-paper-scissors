
let rulesBtn = document.querySelector(".rules-btn");
let closeBtn = document.querySelector(".cross");
let playAgainBtn = document.querySelector(".play-again");
let options = document.querySelector(".options");
let choices = document.querySelector(".choices");
let showResult = document.querySelector(".show-result");
let result = document.querySelector(".result");
let userPara = document.querySelector(".user-para");
let comPara = document.querySelector(".com-para");
let userChoiceElements = [...document.querySelectorAll(".user-choice")];
let option = [...document.querySelectorAll(".option")];
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".rules");
let score = document.querySelector(".score");

// funtion definations

function toggleRules(){
    let rules = document.querySelector(".rules-img");
    rules.classList.toggle("hide");
}
let scoreNumber = Number(score.textContent);

function playRound(playerSelection, computerSelection){
    let winnerLoser = document.querySelector(".result p");
    
    if(playerSelection === "paper" && computerSelection === "rock"){
        winnerLoser.textContent = "You win";
        scoreNumber +=1;
        score.textContent = scoreNumber;
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        winnerLoser.textContent = "You win";
        scoreNumber +=1;
        score.textContent = scoreNumber;
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        winnerLoser.textContent = "You win";
        scoreNumber +=1;
        score.textContent = scoreNumber;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        winnerLoser.textContent = "You Lose";
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        winnerLoser.textContent = "You Lose";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        winnerLoser.textContent = "You Lose";
    }
    else{
        winnerLoser.textContent = "Draw";
    }
}
// computer random choices
let comChoice = document.querySelector(".computer-choice");
function computerChoice(){
    // choose random styles from the three of hands
    let i = Math.floor(Math.random()* option.length);
    comChoice.firstElementChild.classList.add(option[i].classList[0], "option");
    comChoice.firstElementChild.firstElementChild.src = option[i].firstElementChild.src;
    return (option[i].classList[0])

}
let userChoice = document.querySelector(".user-choice");
function showUserSelection(item){
    userChoice.firstElementChild.classList.add(item.classList[0], "option");
    userChoice.firstElementChild.firstElementChild.src = item.firstElementChild.src;
    return item.classList[0];
}

function showSelection(e){
    if(option.includes(e.target)){
        options.classList.toggle("hide");
        showResult.classList.toggle("hide");
    }
    // computerChoice();
    showUserSelection(e.target);
    let computChoice = computerChoice();
    let userSelection = showUserSelection(e.target);
    playRound(userSelection, computChoice);
}
function playAgain(){
    comChoice.firstElementChild.classList = "";
    userChoice.firstElementChild.classList = "";
    options.classList.toggle("hide");
    showResult.classList.toggle("hide");
}


// show and hide game rules
rulesBtn.addEventListener("click", toggleRules);
closeBtn.addEventListener("click", toggleRules);

// show user and computer Selections
options.addEventListener("click", showSelection);

playAgainBtn.addEventListener("click", playAgain)