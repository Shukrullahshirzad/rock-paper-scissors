const ruleBtn = document.querySelector(".rules-btn");
const displayRules = document.querySelector(".rules");
const closeRules = document.querySelector(".close-rules");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const updateScore = document.querySelector("#score");




ruleBtn.addEventListener("click", (e)=>{
    displayRules.style.zIndex = "9";
    displayRules.style.opacity = "1";

})
closeRules.addEventListener("click", (e)=>{
    displayRules.style.zIndex = "-1";
    displayRules.style.opacity = "0";

})