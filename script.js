let playerScoreBox = document.querySelector('.playerScoreBox');
let computerScoreBox = document.querySelector('.computerScoreBox');
let roundCounterBox = document.querySelector('.roundCounterBox');
let messageBox = document.querySelector('.messageBox');
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
            messageBox.textContent = 'You Win! Rock beats scissors.';
        checkScore()
    } else if (playerChoice == 'btn-paper' && computerChoice == 'rock') {
        roundCounter++;
        playerScore++;
        roundCounterBox.textContent = roundCounter;
        playerScoreBox.textContent = playerScore;
        messageBox.textContent ='You Win! Paper beats rock.';
        checkScore()
    } else if (playerChoice == 'btn-scissors' && computerChoice == 'paper') {
        roundCounter++;
        playerScore++;
        roundCounterBox.textContent = roundCounter;
        playerScoreBox.textContent = playerScore;
        messageBox.textContent ='You Win! Scissors beats paper.';
        checkScore()
    } else if (playerChoice == 'btn-rock' && computerChoice == 'paper') {
        roundCounter++;
        computerScore++;
        roundCounterBox.textContent = roundCounter;
        computerScoreBox.textContent = computerScore;
        messageBox.textContent ='You Lost. Paper beats rock';
        checkScore()
    } else if (playerChoice == 'btn-paper' && computerChoice == 'scissors') {
        roundCounter++;
        computerScore++;
        roundCounterBox.textContent = roundCounter;
        computerScoreBox.textContent = computerScore;
        messageBox.textContent ='You Lost. Scissors beats paper';
        checkScore()
    } else if (playerChoice == 'btn-scissors' && computerChoice == 'rock') {
        roundCounter++;
        computerScore++;
        roundCounterBox.textContent = roundCounter;
        computerScoreBox.textContent = computerScore;
        messageBox.textContent = 'You Lost. Rock beats scissors';
        checkScore()
    } else if (playerChoice == ("btn-" + computerChoice)){
        roundCounter++;
        roundCounterBox.textContent = roundCounter;
        messageBox.textContent ='Tie!'
        checkScore()
    } else {
        messageBox.textContent = "Sorry there was an error."
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        playRound(playerChoice = button.className);
    })
})

function checkScore () {
    if (playerScore == 5) {
        alert('Game Over. You Won!');
        roundCounter = 0;
        roundCounterBox.textContent = 0;
        playerScore = 0;
        playerScoreBox.textContent = 0;
        computerScore = 0;
        computerScoreBox.textContent = 0;
    } else if (computerScore == 5) {
        alert('Game Over. You Lost.');
        roundCounter = 0;
        roundCounterBox.textContent = 0;
        playerScore = 0;
        playerScoreBox.textContent = 0;
        computerScore = 0;
        computerScoreBox.textContent = 0;
    }
}
