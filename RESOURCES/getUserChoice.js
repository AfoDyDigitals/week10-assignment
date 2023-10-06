export default function getUserChoice(){
    let playerInput = prompt(
        "Pick an object among Rock, Paper, and Scissors: ".toLowerCase());
    
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