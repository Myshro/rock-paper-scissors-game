/// V DOM magic

let choice;
let result;

const images = document.querySelectorAll('.clickable');

const container = document.querySelector('.logs');
const output = document.createElement('div');
output.classList.add('output');

const textPlayerScore = document.querySelector('.playerScore');
const textComputerScore = document.querySelector('.computerScore');

const title = document.querySelector('h1');


images.forEach((clickable) => {
    clickable.addEventListener('click', () => {
        if (playerScore !== 5 && computerScore !== 5) {
            container.textContent = ''
            if (clickable.className === 'clickable rock') {
                choice = 'rock';
            } else if (clickable.className === 'clickable paper') {
                choice = 'paper';
            } else if (clickable.className === 'clickable scissors') {
                choice = 'scissors';
            }
            output.textContent = playRound(choice);
            title.style.color = getRandomColor();
        } 
        
        if (playerScore === 5) {
            output.textContent = "You are VICTORIOUS, refresh to play again"
        } else if (computerScore === 5) {
            output.textContent = "You are DEFEATED, refresh to play again"
        }

        container.appendChild(output);
        textPlayerScore.textContent = playerScore;
        textComputerScore.textContent = computerScore;
        

        //console.log(clickable.className);
    });
});

/// V Functions and logic 

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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

// function playerPlay() {
//     playerOption = prompt('Type \'rock\', \'paper\', or \'scissors\' to choose: ').toLowerCase();
//     while ((playerOption !== 'rock') && (playerOption !== 'paper') && (playerOption !== 'scissors')) {
//         playerOption = prompt(`${playerOption} is invalid. Please pick: rock, paper, or scissors`)
//     }

//     return playerOption;
// }

function playRound(choice) {
    computerSelection = computerPlay()
    if (choice === computerSelection) {
        return 'Tie!';
    } else if (choice === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1;
            return 'You lose! Paper beats rock';
        } else {
            playerScore += 1;
            return 'You win! Rock beats scissors';
        }
    } else if (choice === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore += 1;
            return 'You lose! Scissors beats paper';
        } else {
            playerScore += 1;
            return 'You win! Paper beats rock';
        }
    } else if (choice === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1;
            return 'You lose! Rock beats scissors';
        } else {
            playerScore += 1;
            return 'You win! Scissors beats paper';
        }
    }
}

// function game () {
//     for (let i = 0; i < 2; i ++) {
//         console.log(playRound())
//     }
//     if (playerScore > computerScore) {
//         console.log('VICTORY! \nthe score was: ' + playerScore + ' (You)' + ' to ' + computerScore + ' (Computer)')
//     } else if (computerScore > playerScore) {
//         console.log('DEFEAT! \nthe score was: ' + playerScore + ' (You)' + ' to ' + computerScore + ' (Computer)')
//     } else {
//         console.log('DRAW! \nthe score was: ' + playerScore + ' (You)' + ' to ' + computerScore + ' (Computer)')
//     }
// }

