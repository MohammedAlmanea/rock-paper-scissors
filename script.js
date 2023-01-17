let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();

  if (playerSelection === computerSelection) return `DRAW!! You Played ${playerSelection} and the Computer played ${computerSelection}` ;

  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  )
    return `Computer wins You Played ${playerSelection} and the Computer played ${computerSelection}`;
  return `YOU WIN!! You Played ${playerSelection} and the Computer played ${computerSelection}`;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt(`Rock, Paper, Scissors? ${i}/5`).toUpperCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}


game();