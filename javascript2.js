
let compScore = 0;
let playerScore = 0;
//const playerSelection = 'scissors';

function commputerPlay(){
    let rps = ['rock', 'paper', 'scissors'];
    let comp = rps[Math.floor(Math.random() * rps.length)];
    return(comp)
}

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
}

function game(){
    for(let i=0;i < 5; i++){
        const playerSelection = prompt('Will you choose rock, paper, or scissors?').toLowerCase();
        const computerSelection = commputerPlay();
        singleRound(computerSelection, playerSelection);
    }
    if(compScore < playerScore){
        console.log('You win');
    }else if(compScore > playerScore){
        console.log('You lose')
    }else if(compScore == playerScore){
        console.log('Tie game')
    }
}
game();