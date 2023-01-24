const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let compScore;
let playerScore;

function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissors'];
    let comp = rps[Math.floor(Math.random() * rps.length)]
    return comp
}
function getPlayerChoice(){
    let playerChoice = prompt('Will you choose rock, paper, or scissors?');
    let options = playerChoice.toLowerCase();
    return options
}

function playRound(playerSelection, computerSelection){

    
    if(playerSelection === computerSelection){
        console.log('Tie game!');
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! Paper beats rock.');
        ++compScore;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You win! Rock beats scissors.');
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! Scissors beats paper.');
        ++compScore;
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You win! Paper beats rock.');
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! Rock beats scissors.');
        ++compScore;
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You win! Scissors beats rock.');
    }else{
        console.log('Invalid input')
    }
    


}

function game(){
    for(let i=0; i < 5; i++){
        playRound(playerSelection, computerSelection)
    }
}
game()