
let result;
let playerWins = 0;
let computerWins = 0;
let draws = 0;
const results = document.querySelector('#results');
const score = document.querySelector('#scores')
const playerTally = document.querySelector('#playerTally')
const computerTally = document.querySelector('#computerTally')
const drawTally = document.querySelector('#drawTally')
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        round(button.id, Math.floor(Math.random() * 3))
    });
});
function round(player, computer) {
    if (player == computer) {
        draws++;
        drawTally.textContent = draws;
        results.textContent = 'Draw!';
    }
    else if ((player == 0) && (computer == 1)) {
        result = `You lose! Paper wraps rock!`;
        computerScore();
    }
    else if ((player == 0) && (computer == 2)) {
        result = `You win! Rock blunts scissors!`;
        playerScore()
    }
    else if ((player == 1) && (computer == 2)) {
        result = `You win! Rock blunts scissors!`;
        computerScore()
    }
    else if ((player == 1) && (computer == 0)) {
        result = `You win! Rock blunts scissors!`;
        playerScore()
    }
    else if ((player == 2) && (computer == 0)) {
        result = `You lose! Rock blunts scissors!`;
        computerScore()
    }
    else if ((player == 2) && (computer == 1)) {
        result = `You win! Scissors cut paper!`;
        playerScore()
    }
}
function playerScore() {
    playerWins++
    results.textContent = result;
    playerTally.textContent = playerWins;
    if (playerWins == 5) {
        if (playerWins - computerWins == 1) {
            alert("You won... Just. Rematch?");
            reset();
        }
        else {
            alert("You win this one. Another?");
            reset();
        }
    }
}
function computerScore() {
    computerWins++
    results.textContent = result;
    computerTally.textContent = computerWins;
    if (computerWins == 5) {
        if (computerWins - playerWins == 1) {
            alert("Not even close. Another try?");
            reset();
        }
        else {
            alert("You lost this time! Try again?");
            reset();
        }
    }
}
function reset() {
    playerWins = 0;
    computerWins = 0;
    draws = 0;
    computerTally.textContent = computerWins;
    playerTally.textContent = playerWins;
    drawTally.textContent = draws;
    results.textContent = 'One more time. Let\'s go.';
}

