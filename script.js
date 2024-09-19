let playerScore = 0
let computerScore = 0

function getComputerChoice () {
    choice = Math.floor(Math.random() * 3) + 1
    if (choice == 1) {
        return 'rock'
    } else if (choice == 2) {
        return 'paper'
    } else if (choice == 3) {
        return 'scissors' 
    } else {
        alert('Sorry, there was an error')
    }
}

function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase()
}

function playRound (playerChoice, computerChoice) {
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()
    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++
        console.log('You Win! Rock beats scissors.')
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++
        console.log('You Win! Paper beats rock.')
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++
        console.log('You Win! Scissors beats paper.')
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore++
        console.log('You Lost. Paper beats rock')
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++
        console.log('You Lost. Scissors beats paper')
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++
        console.log('You Lost. Rock beats scissors')
    } else if (playerChoice == computerChoice){
        console.log('Tie!')
    } else {
        console.log('Sorry, there was an error.')
    }
}
/*
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

playGame()

*/

