const choice = ['rock','paper','scissors'];

const rock = document.querySelector(".rock")

const paper = document.querySelector(".paper")

const scissors = document.querySelector(".scissors")

const scoreNumber = document.querySelector(".score-number")

const rules = document.querySelector(".rules")

const modal = document.getElementById("modal")

const closeButton = document.getElementById("close")

let draws = 0;

let wins = 0;

let loses = 0;

let result = 0;

let computer = "none";

let score = 0;

let player = 'none';

rock.addEventListener("click", () => {
    player = "rock"
    computerChoice()
    Play()
})

paper.addEventListener("click", () => {
    player = "paper"
    computerChoice()
    Play()
})

scissors.addEventListener("click", () => {
    player = "scissors"
    computerChoice()
    Play()
})

function computerChoice() {
    computer = choice[Math.floor(Math.random()*3)];
}

rules.addEventListener("click", () => {
    modal.classList.remove('hidden');
    modal.classList.add('show');
})

closeButton.addEventListener("click", () => {
    modal.classList.remove('show');
    modal.classList.add('hidden');
})

function Play() {

    console.log('Computer chose : ', computer);
    console.log('You chose : ', player);
    
    if (computer == player) {
        result = "Draw!";
    }
    else if (computer == 'rock' && player == 'paper') {
        result = "You Win! Paper beats rock!";
        score = score +1;
        scoreNumber.textContent = score;
    }
    else if (computer == 'rock' && player == 'scissors') {
        result = "You Lose! rock beats scissors!";
        score = score -1;
        scoreNumber.textContent = score;
    }
    else if (computer == 'paper' && player == 'rock') {
        result = "You Lose! Paper beats rock!";
        score = score -1;
        scoreNumber.textContent = score;
    }
    else if (computer == 'paper' && player == 'scissors') {
        result = "You Win! scissors beat paper";
        score = score +1;
        scoreNumber.textContent = score;
    }
    else if (computer == 'scissors' && player == 'rock') {
        result = "You Win! rock beats scissors";
        score = score +1;
        scoreNumber.textContent = score;
    }
    else if (computer == 'scissors' && player == 'paper') {
        result = "You Lose! scissors beat paper";
        score = score -1;
        scoreNumber.textContent = score;
    }
    
}