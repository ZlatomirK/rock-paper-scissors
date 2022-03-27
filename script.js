console.log("hello men")

let draw = 0

let win = 0

let lose = 0

function Play() {

    let computerPlay = "none";
    
    let computerPlay2 = "none";
    
    let playerPlay = "none";
    
    let result = "none";
    
    let random = Math.floor(Math.random()*3)+1;;
    
    if (random == 1) {
        computerPlay = "rock";
    }
    else if (random == 2) {
        computerPlay = "paper";
    }
    else {
        computerPlay = "scissors";
    }
    
    
    playerPlay = window.prompt("Your play(1 rock, 2 paper, 3 scissors): ");
    
    if (playerPlay == 1) {
        computerPlay2 = "rock";
    }
    else if (playerPlay == 2) {
        computerPlay2 = "paper";
    }
    else if (playerPlay == 3) {
        computerPlay2 = "scissors";
    }
    
    console.log(computerPlay);
    console.log(computerPlay2);
    
    if (random == playerPlay) {
        result = "Draw!";
        draw = draw+1;
    }
    else if (random == 1 && playerPlay == 2) {
        result = "You Win! Paper beats rock!";
        win = win+1;
    }
    else if (random == 1 && playerPlay == 3) {
        result = "You Lose! rock beats scissors!";
        lose = lose+1;
    }
    else if (random == 2 && playerPlay == 1) {
        result = "You Lose! Paper beats rock!";
        lose = lose+1;
    }
    else if (random == 2 && playerPlay == 3) {
        result = "You Win! scissors beat paper";
        win = win+1;
    }
    else if (random == 3 && playerPlay == 1) {
        result = "You Win! rock beats scissors";
        win = win+1;
    }
    else if (random == 3 && playerPlay == 2) {
        result = "You Lose! scissors beat paper";
        lose = lose+1;
    }
    
    console.log(result);

}


function game() {
    for (let i = 0; i < 5; i++) {
        Play();
        console.log("You drew ",draw," times, won ",win," times and lost "
                ,lose," times.");
     }
}

game()