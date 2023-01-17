const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

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
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You win! Rock beats scissors.');
    }else{
        console.log('Invalid input')
    }
}
