
let choices = ["Rock", "Paper", "Scissors"];

export default function getComputerChoice(){
    let choice= Math.floor(Math.random()*choices.length);
    console.log("Computer picked" + " " + choices[choice]);
    return choices[choice];
};
// getComputerChoice();