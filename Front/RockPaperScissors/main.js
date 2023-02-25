const buttonPlay = document.getElementById('button');

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

const rpsButtons = document.querySelectorAll('.rps-buttons-style');


let playerInput = "";

rockButton.addEventListener('click', () => {
    // what button gives
    rockButton.style.backgroundColor = 'green';

    playerInput = "rock"
});
paperButton.addEventListener('click', () => {
    // what button gives
    paperButton.style.backgroundColor = 'pink';

    playerInput = "paper"
});
scissorsButton.addEventListener('click', () => {
    // what button gives
    scissorsButton.style.backgroundColor = 'purple';

    playerInput = "scissors"
});



buttonPlay.addEventListener('click', function rockPaperScissors() {

    const player1 = playerInput;
    console.log("Player 1:", player1);

    const player2 = computerMove();
    console.log("Player 2:", player2);

    const winner = computeWinner(player1, player2);
    console.log("The winner is:", winner)

    //reset colors to white
    rpsButtons.forEach(resetColors)

    return winner


})


function computerMove() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:

            return "paper";
        case 3:

            return "scissors";
    }
}

function computeWinner(player1, player2) {

    if (player1 === player2) {

        console.log("tie");
        return "Tie"
    }
    if (player1 === "rock") {
        switch (player2) {
            case "paper": return "Player 2 wins"
            case "scissors": return "Player 1 wins"
        }
    }
    if (player1 === "paper") {
        switch (player2) {
            case "scissors": return "Player 2 wins"
            case "rock": return "Player 1 wins"
        }
    }
    if (player1 === "scissors") {
        switch (player2) {
            case "rock": return "Player 2 wins"
            case "paper": return "Player 1 wins"
        }
    }
}
function resetColors(button) {
    button.style.backgroundColor = "white";
}