const statusText = document.querySelector('#status');
const scoreText = document.querySelector('#score');
const choices = document.querySelectorAll('.item');
let computer;
let user;
let result;
let userScore = 0;
let computerScore = 0;

choices.forEach(btn => btn.addEventListener("click" , () => {
    user = btn.getAttribute('value');
    computer = getComputerChoice();
    result = playRound();
    statusText.textContent = `Your choice ${user} , Computer choice ${computer} , So You ${result}`;
    if(result === 'win'){
        ++userScore;
    }else if(result === 'lose'){
        ++computerScore;
    }
    scoreText.textContent = `Your score ${userScore} , Computer score ${computerScore}`;
    if(userScore == 5 || computerScore == 5){
        declareWinner();
        userScore = 0;
        computerScore = 0;
        scoreText.textContent = '';
    }

}))

function getComputerChoice(){
    const choices = ['rock' , 'paper' , 'scissors'];
    let randomItem = Math.floor(Math.random() * 3);
    return choices[randomItem];
}

function playRound(){
    if(computer === user){
        return 'Tie!';
    }else if(user === 'rock'){
        return (computer === 'scissors') ? 'win' : 'lose' ;
    }else if(user === 'paper'){
        return (computer === 'scissors') ? 'lose' : 'win' ;
    }else if(user === 'scissors'){
        return (computer === 'rock') ? 'lose' : 'win' ;
    }
}

function declareWinner(){
    if(userScore > computerScore){
        statusText.textContent = `You win`;
    }else{
        statusText.textContent = `You lose`;
    }
}

