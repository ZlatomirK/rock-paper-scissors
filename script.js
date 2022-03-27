console.log("hello men")

const choice = ['rock','paper','scissors'];

let draws = 0;

let wins = 0;

let loses = 0;

let player = 'none';

function playerChoice() {
    player = prompt('Your play (rock, paper or scissors):')
            .toLowerCase();

    if (choice.includes(player)) {
        return;
    } 
    else {
        playerChoice();
    }
}


function Play() {

    let computer = choice[Math.floor(Math.random()*3)];

    playerChoice()

    console.log('Computer chose : ', computer);
    console.log('You chose : ', player);
    
    if (computer == player) {
        result = "Draw!";
        draws = draws+1;
    }
    else if (computer == 'rock' && player == 'paper') {
        result = "You Win! Paper beats rock!";
        wins = wins+1;
    }
    else if (computer == 'rock' && player == 'scissors') {
        result = "You Lose! rock beats scissors!";
        loses = loses+1;
    }
    else if (computer == 'paper' && player == 'rock') {
        result = "You Lose! Paper beats rock!";
        loses = loses+1;
    }
    else if (computer == 'paper' && player == 'scissors') {
        result = "You Win! scissors beat paper";
        wins = wins+1;
    }
    else if (computer == 'scissors' && player == 'rock') {
        result = "You Win! rock beats scissors";
        wins = wins+1;
    }
    else if (computer == 'scissors' && player == 'paper') {
        result = "You Lose! scissors beat paper";
        loses = loses+1;
    }
    
    console.log(result);

}


function game() {
    for (let i = 0; i < 5; i++) {
        Play();
     }
}

game();

console.log("You drew ",draws," times, won ",wins," times and lost ",loses," times.");