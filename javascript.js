/*
create a var for rock
create a var for scissors
create a var for paper
create a founction 
make the function named getComputerChoice choose a random var
return that var
*/
function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"]
    computerSelection = rps[Math.floor(Math.random() * rps.length)];
    return computerSelection;
}
getComputerChoice()

function getPlayerChoice(){
    let playerSelection = prompt('Will you choose rock, paper, or scissors?');
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

playRound()
}
getPlayerChoice()
/*
create a function with two parameters playerSelection and computer selection
prompt the user to pick rock paper or scissors
run the function to get random computer choice
compare the computer to the user 
if the user win print you win and how they won
if user lost print you lose and tell how they lost
*/
const playerSelection = 'rock'
function playRound(playerSelection, computerSelection){

    switch([playRound]){
        case playerSelection === 'rock' && computerSelection === 'rock':
            console.log('Tie game');
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            console.log('You lose. Paper beats rock.');
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            console.log('You win. Rock beats scissors.');
            break;
    }
    return;
}
/*
create for loops to determine the winners for the game, one for teh commputer and the user
wrap in a while loop until either the user or the computer wins
*/