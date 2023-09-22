import gameRule from "./gameRule.js";

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