const ruleBtn = document.querySelector(".rules-btn");
const displayRules = document.querySelector(".rules");
const closeRules = document.querySelector(".close-rules");
const display = document.querySelector(".display");
const choiceBtns = document.querySelector(".choice-btns");
const selection = document.querySelector(".selection");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const updateScore = document.querySelector("#score");
const playAgain = document.querySelector(".play-again");


// show and hide rules 

ruleBtn.addEventListener("click", (e)=>{
    displayRules.style.zIndex = "9";
    displayRules.style.opacity = "1";

})
closeRules.addEventListener("click", (e)=>{
    displayRules.style.zIndex = "-10";
    displayRules.style.opacity = "0";

})

// show selection

display.addEventListener("click", (e)=>{
    choiceBtns.classList.add("hide");
    selection.classList.remove("hide");

})

// hide selection
playAgain.addEventListener("click", (e)=>{
    choiceBtns.classList.remove("hide");
    selection.classList.add("hide");
})