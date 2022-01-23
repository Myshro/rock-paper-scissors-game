
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    computerOption = Math.floor(Math.random() * 3 )

    if (computerOption === 0) {
        return 'rock'
    } else if (computerOption === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playerPlay() {
    playerOption = prompt('Type \'rock\', \'paper\', or \'scissors\' to choose: ').toLowerCase()
    if (playerOption !== 'rock' || playerOption !== 'paper' || playerOption !== 'scissors') {
        return playerOption
    } 
}

function playRound() {
    playerSelection = playerPlay()
    computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        return 'Tie!'    
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            return 'You lose! Paper beats rock'
        } else {
            playerScore += 1;
            return 'You win! Rock beats scissors'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore += 1;
            return 'You lose! Scissors beats paper' 
        } else {
            playerScore += 1;
            return 'You win! Paper beats rock'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            return 'You lose! Rock beats scissors'
        } else {
            playerScore += 1;
            return 'You win! Scissors beats paper'
        }
    }
}

function game () {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    if (playerScore > computerScore) {
        console.log('VICTORY! \nthe score was: ' + playerScore + ' (You)' + ' to ' + computerScore + ' (Computer)')
    } else if (computerScore > playerScore) {
        console.log('DEFEAT! \nthe score was: ' + playerScore + ' (You)' + ' to ' + computerScore + ' (Computer)')
    } else {
        console.log('DRAW! \nthe score was: ' + playerScore + ' (You)' + ' to ' + computerScore + ' (Computer)')
    }
}

game()