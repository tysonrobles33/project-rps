function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice == 1) {
        alert('Rock')
    } else if (computerChoice == 2) {
        alert('Paper')
    } else if (computerChoice == 3) {
        alert('Scissors') 
    } else {
        alert('Sorry, there was an error')
    }
}