let choices = ['ROCK', 'PAPER', 'SCISSORS'];

let result = document.querySelector('#result');

let buttons = document.querySelectorAll('.plays');

buttons.forEach((button) => button.addEventListener('click', playRound));

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(e) {
  playerSelection = e.target.id.toUpperCase();
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection)
    result.textContent = `DRAW!! You Played ${playerSelection} and the Computer played ${computerSelection}`;

  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  )
    result.textContent = `Computer wins You Played ${playerSelection} and the Computer played ${computerSelection}`;
  result.textContent = `YOU WIN!! You Played ${playerSelection} and the Computer played ${computerSelection}`;
}
