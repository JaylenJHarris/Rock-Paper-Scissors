
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

/*
function playRound(playerSelection, computerSelection){

    
    if(playerSelection === computerSelection){
        return('Tie game!');
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return('You lose! Paper beats rock.');
        compScore++;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return('You win! Rock beats scissors.');
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return('You lose! Scissors beats paper.');
        compScore++;
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return('You win! Paper beats rock.');
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return('You lose! Rock beats scissors.');
        compScore++;
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return('You win! Scissors beats rock.');
    }else{
        console.log('Invalid input')
    }
    


}*/

function game(){
    for(let i=0; i < 5; i++){
        /*
        function getPlayerChoice(){
            let playerChoice = prompt('Will you choose rock, paper, or scissors?');
            let options = playerChoice.toLowerCase();
            return options
        }
        
        function playRound(playerSelection, computerSelection){

    
            if(playerSelection === computerSelection){
                return('Tie game!');
            }else if(playerSelection === 'rock' && computerSelection === 'paper'){
                return('You lose! Paper beats rock.');
                compScore++;
            }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
                return('You win! Rock beats scissors.');
            }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
                return('You lose! Scissors beats paper.');
                compScore++;
            }else if(playerSelection === 'paper' && computerSelection === 'rock'){
                return('You win! Paper beats rock.');
            }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
                return('You lose! Rock beats scissors.');
                compScore++;
            }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
                return('You win! Scissors beats rock.');
            }else{
                console.log('Invalid input')
            }
        
        
        
        }
        */
        playRound(playerSelection, computerSelection);
        console.log( compScore)
        return
    }
}
game()