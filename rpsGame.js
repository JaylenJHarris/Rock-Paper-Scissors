/*
randomly generate the computer's choice will do this using an array

write a function that plays a single round of rock paper scisors
[
    takes 2 parameters player selectionn and computer selection
    compares the players selection vs the selection of the computer
    and gives a point to the winning player
]
create the game function
[
    use the play round function inside 
    create a loop to keep playing until either the player or the computer gets to 5 points
        [
            the loop needs to ask for the players input after every win
        ]
    reports the winner of the game 
]
*/

let compScore = 0;
let playerScore = 0;
//const playerSelection = 'scissors';

function commputerPlay(){
    let rps = ['rock', 'paper', 'scissors'];
    let comp = rps[Math.floor(Math.random() * rps.length)];
    return(comp)
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock'
    console.log(playerSelection)
    const computerSelection = commputerPlay();
    singleRound(computerSelection, playerSelection);
})
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    const computerSelection = commputerPlay();
    singleRound(computerSelection, playerSelection);
})
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    console.log(playerSelection);
    const computerSelection = commputerPlay();
    singleRound(computerSelection, playerSelection);
})

function singleRound(computerSelection, playerSelection){
    if(playerSelection === computerSelection){
        console.log('Tie game!');
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! Paper beats rock.');
        compScore++;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You win! Rock beats scissors.');
        playerScore++;
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! Scissors beats paper.');
        compScore++;
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You win! Paper beats rock.');
        playerScore++;
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! Rock beats scissors.');
        compScore++;
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You win! Scissors beats rock.');
        playerScore++;
    }else{
        console.log('Invalid input')
    }

    if(playerScore == 5){
        console.log('You win the game');
    }else if(compScore == 5){
        console.log('You lose the game')
    }
    console.log(playerSelection, computerSelection);
    console.log(playerScore, compScore)
}

function game(){
    //f

}
game();