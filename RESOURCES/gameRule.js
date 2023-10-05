import getComputerChoice from "./getComputerChoice.js";
import getUserChoice from "./getUserChoice.js";

export default function gameRule(playerSelection, computerSelection){
    // let playerSelection = getUserChoice();
    // let computerSelection = getComputerChoice();

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