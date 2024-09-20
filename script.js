let playerScoreBox = document.querySelector('.playerScoreBox');
let computerScoreBox = document.querySelector('.computerScoreBox');
let roundCounterBox = document.querySelector('.roundCounterBox');
let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    choice = Math.floor(Math.random() * 3) + 1
    if (choice == 1) {
        return 'rock';
    } else if (choice == 2) {
        return 'paper';
    } else if (choice == 3) {
        return 'scissors' ;
    } else {
        alert('Sorry, there was an error');
    }
}


function playRound (playerChoice, computerChoice) {
    computerChoice = getComputerChoice()
    if (playerChoice == 'btn-rock' && computerChoice == 'scissors') {
        roundCounter++;
        playerScore++;
        roundCounterBox.textContent = roundCounter;
        playerScoreBox.textContent = playerScore;
            console.log('You Win! Rock beats scissors.');
    } else if (playerChoice == 'btn-paper' && computerChoice == 'rock') {
        roundCounter++;
        playerScore++;
        roundCounterBox.textContent = roundCounter;
        playerScoreBox.textContent = playerScore;
            console.log('You Win! Paper beats rock.');
    } else if (playerChoice == 'btn-scissors' && computerChoice == 'paper') {
        roundCounter++;
        playerScore++;
        roundCounterBox.textContent = roundCounter;
        playerScoreBox.textContent = playerScore;
            console.log('You Win! Scissors beats paper.');
    } else if (playerChoice == 'btn-rock' && computerChoice == 'paper') {
        roundCounter++;
        computerScore++;
        roundCounterBox.textContent = roundCounter;
        computerScoreBox.textContent = computerScore;
            console.log('You Lost. Paper beats rock');
    } else if (playerChoice == 'btn-paper' && computerChoice == 'scissors') {
        roundCounter++;
        computerScore++;
        roundCounterBox.textContent = roundCounter;
        computerScoreBox.textContent = computerScore;
            console.log('You Lost. Scissors beats paper');
    } else if (playerChoice == 'btn-scissors' && computerChoice == 'rock') {
        roundCounter++;
        computerScore++;
        roundCounterBox.textContent = roundCounter;
        computerScoreBox.textContent = computerScore;
            console.log('You Lost. Rock beats scissors');
    } else if (playerChoice == ("btn-" + computerChoice)){
        roundCounter++;
        roundCounterBox.textContent = roundCounter;
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