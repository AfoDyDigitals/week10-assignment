// const prompt = require("prompt-sync")(); 
import gameRule from "./gameRule.js";
import getComputerChoice from "./getComputerChoice.js";

function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (let i=1; i<=5; i++){
        let result = gameRule();
        if (result === "win"){
            round ++;
            playerScore ++;
            console.log(
                `Round: ${round}, Player-score ${playerScore} :  ${computerScore} Computer-score`
                );
        } else if (result === "lose"){
            round ++;
            computerScore ++;
            console.log(
                `Round: ${round}, Player-score ${playerScore} :  ${computerScore} Computer-score`
                );
        } else {
         round ++;
         console.log(
            `Round: ${round}, Player-score ${playerScore} :  ${computerScore} Computer-score`
            );
        }
    }
    if (computerScore < playerScore) {
        console.log("Amazing! You win!!!");
    } else if (computerScore > playerScore) {
        console.log ("Oops! You lose! Better luck next time!");
    } else {
        console.log("It's a tough one, no winner for this round! Try again");
    }
};
// game();

const message = document.querySelector(".message")
const compMessage = document.querySelector(".compMessage")
const result = document.querySelector(".result")
const scoreBoard = document.querySelector(".scoreBoard")
const roundName = document.querySelector(".roundName")
let round = 0;
let playerScore = 0;
let computerScore = 0;


function gameEngine(choice) {
    if (round >=5){
        return;
    }
    round++

    const compChoice = getComputerChoice();
    const rule = gameRule(choice, compChoice)
    message.innerHTML = `User clicked ${choice}`
    compMessage.innerHTML= `Computer clicked ${compChoice}`
    if (rule==="tie"){
        roundName.innerHTML = `Round ${round}`
        scoreBoard.innerHTML = `PlayerScore: ${playerScore} : ${computerScore} computerScore`
        result.innerHTML = "It's a tie, please retry"
    } else if (rule==="win"){
        playerScore++
        roundName.innerHTML = `Round ${round}`
        scoreBoard.innerHTML = `PlayerScore: ${playerScore} : ${computerScore} computerScore`
        result.innerHTML ="Congrats, you win"
    } else if (rule==="lose"){
        computerScore++
        roundName.innerHTML = `Round ${round}`
        scoreBoard.innerHTML = `PlayerScore: ${playerScore} : ${computerScore} computerScore`
        result.innerHTML = "Sorry, you lose, computer wins"
    } else {
        result.innerHTML = "Something went wrong"
    }
    
    if (round >=5){
        message.innerHTML= ""
        compMessage.innerHTML= ""
        roundName.innerHTML="Game Completed"

        if (playerScore > computerScore){
            result.innerHTML= "Congratulations, you win the game!"
        } else if (playerScore<computerScore){
            result.innerHTML= "Computer wins the game"
        }else {
            result.innerHTML ="The game ended in a tie"
        }
        return;
    }
}

const rock = document.querySelector(".rock")
rock.addEventListener("click", rockBtn)
function rockBtn() {
    gameEngine("Rock");
    // const compChoice = getComputerChoice();
    // message.innerHTML = "User clicked rock"
    // compMessage.innerHTML= `Computer clicked ${compChoice}`
    // if (compChoice==="Rock"){
    //     result.innerHTML = "It's a tie"
    // } else {
    //     result.innerHTML ="somebody wins"
    // }
};

const paper = document.querySelector(".paper")
paper.addEventListener("click", paperBtn)
function paperBtn() {
    gameEngine("Paper");
};

// const scissors = document.querySelector(".scissors")
// scissors.addEventListener("click", scissorsBtn)
// function scissorsBtn() {
//     console.log("I clicked Scissors")
// };

// const scissors = document.querySelector(".scissors")
// scissors.addEventListener("click", () => {
//     console.log("I clicked scissors2")
// })

const scissors = document.querySelector(".scissors")
scissors.addEventListener("click", function () {
    gameEngine("Scissors");
})

const reset = document.querySelector(".btnReset")
reset.addEventListener("click", function () {
    round = 0
    playerScore = 0
    computerScore = 0

    // roundName.innerHTML= round 0;

})