/*
create a var for rock
create a var for scissors
create a var for paper
create a founction 
make the function named getComputerChoice choose a random var
return that var
*/
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"]
    let compChoice = rps[Math.floor(Math.random() * rps.length)];
    return (compChoice);
}


function getPlayerChoice(){
    let playerChoice = prompt('Will you choose rock, paper, or scissors?');
    playerChoice = playerChoice.toLowerCase();
    return (playerChoice);

}
/*
create a function with two parameters playerSelection and computer selection
prompt the user to pick rock paper or scissors
run the function to get random computer choice
compare the computer to the user 
if the user win print you win and how they won
if user lost print you lose and tell how they lost
*/

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

playRound();
/*
create for loops to determine the winners for the game, one for teh commputer and the user
wrap in a while loop until either the user or the computer wins
*/