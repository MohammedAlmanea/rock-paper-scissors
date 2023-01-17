let choices = ['ROCK','PAPER','SCISSORS'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}
