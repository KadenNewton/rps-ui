let winner = ""
let playerScore = 0
let computerScore = 0

function computerPlay() {
  randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "paper";
  } else if (randomInt === 2) {
    return "scissors";
  }
}

function playRound(playerChoice) {
  playerSelection = playerChoice;
  computerSelection = computerPlay();

  updateChoices(playerSelection, computerSelection);
  
  if (playerSelection === computerSelection) {
    winner = "tie";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    winner = "player";
    playerScore++;
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    winner="computer";
    computerScore++;
  }

  updateScore();
  updateScoreMessage(winner, playerSelection, computerSelection);

}

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScoreP = document.getElementById('playerScore');
const computerScoreP = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');


rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'))

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      playerSign.textContent = '✊';
      break;
    case 'paper':
      playerSign.textContent = '✋';
      break;
    case 'scissors':
      playerSign.textContent = '✌️'
  }

  switch (computerSelection) {
    case 'rock':
      computerSign.textContent = '✊';
      break;
    case 'paper':
      computerSign.textContent = '✋';
      break;
    case 'scissors':
      computerSign.textContent = '✌️';
  }
}

function updateScore() {
  if (winner === 'tie') {
    scoreInfo.textContent = "It's a tie!";
  } else if (winner === 'player') {
    scoreInfo.textContent = 'You won!';
  } else if (winner === 'computer') {
    scoreInfo.textContent = 'You lost!';
  }

  playerScoreP.textContent = `Player: ${playerScore}`;
  computerScoreP.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`
    return
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`
    return
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`
}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
