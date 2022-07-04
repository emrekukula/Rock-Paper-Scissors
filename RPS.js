function computerPlay() {

    let computerChoices = ["rock", "paper", "scissors"];
    let random = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return random;
}

function playRound(playerSelectionLower, computerSelection) {
    if (playerSelectionLower === computerSelection) {
        console.log ("It's a draw!");
}   else if ((playerSelectionLower === "scissors") && (computerSelection === "rock")) {
        computerScore++;
        console.log ("You lose! rock beats scissors");
}   else if ((playerSelectionLower === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        console.log ("You win! scissors beats rock");
}   else if ((playerSelectionLower === "paper") && (computerSelection === "rock")) {
        playerScore++;
        console.log ("You win! rock beats paper");
}   else if ((playerSelectionLower === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        console.log ("You win! paper beats scissors");
}   else if ((playerSelectionLower === "rock") && (computerSelection === "paper")) {
        computerScore++;
        console.log ("You lose! paper beats rock");
}   else if ((playerSelectionLower === "paper") && (computerSelection === "scissors")) {
        computerScore++;
        console.log ("You lose! scissors beats paper");
}   else {
        prompt("Something went wrong!");
}
}

let playerScore = 0;
let computerScore = 0;


function game() {

    
    for (let i=0; i < 5; i++) {

       let playerSelection = prompt("Choose your weapon!");
       let playerSelectionLower = playerSelection.toLowerCase();
       let computerSelection = computerPlay();
       playRound(playerSelectionLower, computerSelection);

    }
        if (playerScore > computerScore) {
            console.log ("You won!");
        } else if (computerScore > playerScore) {
                console.log ("Computer won!");
        } else {
                console.log ("It's a draw!");
        }
}

 game();


console.log(playerScore);
console.log(computerScore);