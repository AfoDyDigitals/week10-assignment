// const prompt = require("prompt-sync")(); 
import gameRule from "./gameRule.js";
import getComputerChoice from "./getComputerChoice.js";

const message = document.querySelector(".message")
const compMessage = document.querySelector(".compMessage")
const result = document.querySelector(".result")
const roundName = document.querySelector(".roundName")
const scoreBoard = document.querySelector(".scoreBoard")
const btnRestart = document.querySelector(".btnRestart")

let round = 0;
let playerScore = 0;
let computerScore = 0;

function game(choice) {
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
        result.innerHTML = "It's a tie. Retry!"
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
            result.innerHTML= "Oops! You lose. Better luck next time!"
        }else {
            result.innerHTML ="The game ended in a tie"
        }
        return;
    }
}


