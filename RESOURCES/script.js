const prompt = require("prompt-sync")(); 
let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let choice= Math.floor(Math.random()*choices.length);
    console.log("Computer picked" + " " + choices[choice]);
    return choices[choice];
};
// getComputerChoice();

function getUserChoice(){
    let playerInput = prompt(
        "Pick an object among Rock, Paper, and Scissors: "
        ).toLowerCase();
    
    if (playerInput == "rock") {
        console.log("You picked rock");
        return "Rock";
    }   else if (playerInput == "paper") {
        console.log("You picked paper");
        return "Paper";
    }   else if (playerInput == "scissors") {
        console.log("You picked scissors");
        return "Scissors";
    } 
    else{
        console.log("Invalid selection");
    }
};
// getUserChoice();

function gameRule(){
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){
        console.log("It's a tie. Retry!");
        return "tie";
      }  else if (playerSelection === "Rock"){
            if (computerSelection === "Paper"){
                console.log ("Aww... paper covers rock, computer wins!");
                return "lose";
            }   else if (computerSelection === "Scissors"){
                console.log ("Rock crushes scissors, well done, you win!");
                return "win";
            }
        } else if (playerSelection === "Paper"){
            if (computerSelection === "Rock"){
                console.log ("Paper covers rock, well done, you win!");
                return "win";
            }  else if (computerSelection === "Scissors"){
            console.log("Aww... scissors cuts paper, computer wins!");
            return "lose";
            } 
        } else if (playerSelection === "Scissors"){
                if (computerSelection === "Paper"){
                console.log ("Scissors cuts paper, well done, you win!");
                return "win";
        } else if(computerSelection === "Rock"){
            console.log ("Aww... rock crushes scissors, computer wins!");
            return "lose";
            }
        } else {
            console.log("Please, enter a valid selection among Rock, Paper, and Scissors");
        }
    }
// gameRule();

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
game();