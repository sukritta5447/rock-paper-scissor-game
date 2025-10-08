// references from HTML
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');

const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultTextEl = document.getElementById('result-text');

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

// score part
let playerScore = 0;
let computerScore = 0;

// computer's choice
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() *3);
    return choice[randomNumber];
}

// where the game function
function playRound(playerSelection, computerSelection) {
    playerChoiceEl.textContent = playerSelection;
    computerChoiceEl.textContent = computerSelection;

    if (playerSelection === computerSelection) {
        resultTextEl.textContent = "It's a Tie!";
        resultTextEl.style.color = 'orange';
    } 
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    )
    {
        playerScore++;
        resultTextEl.textContent = 'You win!';
        resultTextEl.style.color = 'green';
    } 
    else {
        computerScore++;
        resultTextEl.textContent = 'You lose!';
        resultTextEl.style.color = 'red';
    }

    // update them score display
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
});

scissorBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('scissor', computerSelection);
});