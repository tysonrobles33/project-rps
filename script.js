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


function playRound (playerChoice, computerChoice) {
    computerChoice = getComputerChoice()
    if (playerChoice == 'btn-rock' && computerChoice == 'scissors') {
        playerScore++
        console.log('You Win! Rock beats scissors.')
    } else if (playerChoice == 'btn-paper' && computerChoice == 'rock') {
        playerScore++
        console.log('You Win! Paper beats rock.')
    } else if (playerChoice == 'btn-scissors' && computerChoice == 'paper') {
        playerScore++
        console.log('You Win! Scissors beats paper.')
    } else if (playerChoice == 'btn-rock' && computerChoice == 'paper') {
        computerScore++
        console.log('You Lost. Paper beats rock')
    } else if (playerChoice == 'btn-paper' && computerChoice == 'scissors') {
        computerScore++
        console.log('You Lost. Scissors beats paper')
    } else if (playerChoice == 'btn-scissors' && computerChoice == 'rock') {
        computerScore++
        console.log('You Lost. Rock beats scissors')
    } else if (playerChoice == ("btn-" + computerChoice)){
        console.log('Tie!')
    } else {
        console.log(playerChoice, computerChoice)
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

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        playRound(playerChoice = button.className)
    })
})