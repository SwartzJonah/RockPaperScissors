// Buttons
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorBtn = document.querySelector('#scissorBtn');
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    playTies = 0;
    score.textContent = `The score is Player:${playerWins} to Computer:${computerWins} with ${playTies} ties`
    declareWinner.textContent = `Please Start`;
});


rockBtn.addEventListener('click', () => {
    if (playerWins === 5 ){
        declareWinner.textContent = `Player Won! Please Restart game`;
       } else if( computerWins === 5){
         declareWinner.textContent = `Computer Won! Please Restart game`;
       } else {
    winner = playRound("rock", computerPlay());
    switch (winner){
        case "player":
            if (playerWins === 5){
                winner = "Player Wins the Game! :D"
            } else {
            winner = "Player is the Winner";  
            }
            console.log("Player Wins :)");
            console.log(playerWins, computerWins, playTies);
            break;
        case "computer":
            if (computerWins === 5){
                winner = "Computer Wins the Game! Try Again"
            } else {
            winner = "Computer is the Winner";  
            }
        
            console.log("Computer Wins! :(");
            console.log(playerWins, computerWins, playTies);
            break;
        case "tie":
            
            winner = "No winner it's a tie";
            console.log("Tie! :|");
            console.log(playerWins, computerWins, playTies);
            break;
        
    };
    declareWinner.textContent = `${winner}`
    score.textContent = `The score is Player:${playerWins} to Computer:${computerWins} with ${playTies} ties`
}
  });


paperBtn.addEventListener('click', () => {
    if (playerWins === 5 ){
        declareWinner.textContent = `Player Won! Please Restart game`;
       } else if( computerWins === 5){
         declareWinner.textContent = `Computer Won! Please Restart game`;
       } else {
    winner = playRound("paper", computerPlay());
    switch (winner){
        case "player":
            if (playerWins === 5){
                winner = "Player Wins the Game! :D"
            } else {
            winner = "Player is the Winner";  
            }
            console.log(playerWins, computerWins, playTies);;
            
            console.log("Player Wins :)");
            break;
        case "computer":
            if (computerWins === 5){
                winner = "Computer Wins the Game! Try Again"
            } else {
            winner = "Computer is the Winner";  
            }
            console.log(playerWins, computerWins, playTies);
            
            console.log("Computer Wins! :(");
            break;
        case "tie":
            console.log(playerWins, computerWins, playTies);
            winner = "No winner it's a tie";
            console.log("Tie! :|");
            break;
  };
  declareWinner.textContent = `${winner}`
  score.textContent = `The score is Player:${playerWins} to Computer:${computerWins} with ${playTies} ties`
       }
});


scissorBtn.addEventListener('click', () => {
    if (playerWins === 5 ){
        declareWinner.textContent = `Player Won! Please Restart game`;
       } else if( computerWins === 5){
         declareWinner.textContent = `Computer Won! Please Restart game`;
       } else {
    winner = playRound("scissor", computerPlay());
    switch (winner){
        case "player":
            if (playerWins === 5){
                winner = "Player wins the Game! :D"
            } else {
            winner = "Player is the Winner";  
            }
            console.log(playerWins, computerWins, playTies);
            
            console.log("Player Wins :)");
            break;
        case "computer":
            if (computerWins === 5){
                winner = "Computer wins the game! Try Again!"
            } else {
            winner = "Computer is the Winner";  
            }
            console.log(playerWins, computerWins, playTies);
            
            console.log("Computer Wins! :(");
            break;
        case "tie":
            console.log(playerWins, computerWins, playTies);
            winner = "No winner it's a tie";
            console.log("Tie! :|");
            break;
  };
  declareWinner.textContent = `${winner}`
  score.textContent = `The score is Player:${playerWins} to Computer:${computerWins} with ${playTies} ties`
}
});
const resultsContainer = document.querySelector("#resultContainer");

const declareWinner = document.createElement("h2");
declareWinner.classList.add('declareWinner');
declareWinner.textContent = `${winner}`;
resultsContainer.appendChild(declareWinner);


const score = document.createElement('h1');
score.classList.add('score');
score.textContent = `The score is Player:${playerWins} to Computer:${computerWins} with ${playTies} ties`;
resultsContainer.appendChild(score);



//Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    let choice = getRandomInt(3);
    let answer = "";
    switch (choice){
        case 0:
            answer = "rock";
            break;
        case 1: 
            answer = "paper";
            break;
        case 2:
            answer = "scissor";
            break;
    }
    return answer;
}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    if ((playerSelection == "rock" && computerSelection == "scissor")
        || (playerSelection == "paper" && computerSelection == "rock") 
        || (playerSelection == "scissor" && computerSelection == "paper")){
            playerWins++;
            console.log("player");
            return "player";
        } else if ((playerSelection == "rock" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "scissor") 
        || (playerSelection == "scissor" && computerSelection == "rock")){
            computerWins++;
            console.log("computer");
            return "computer";
        } else{
            playTies++;
            console.log("tie");
            return "tie";
        }
}






        
/*function game(){
    let playerWins = 0;
    let computerWins = 0;
    let playTies = 0;
    for (let i = 0; i < 0; i++){
        let playerSelection = prompt("Please enter rock, paper or scissor :D");
        if (playerSelection == null){
            console.log("enter something!");
            i--;
        } else{
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection != "rock" && playerSelection != "scissor" && playerSelection != "paper"){
            console.log("please enter valid response")
            i--;
            
        } else{
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        switch (winner){
            case "player":
                playerWins++;
                console.log("Player Wins :)");
                break;
            case "computer":
                computerWins++;
                console.log("Computer Wins! :(");
                break;
            case "tie":
                playTies++;
                console.log("Tie! :|");
                break;
        }
    }}
    }
    console.log(playerWins, computerWins, playTies);
    if (playerWins > computerWins){
        console.log("Player is Winner");
    } else if (computerWins > playerWins){
        console.log("Computer is Winner");
    } else {
        console.log("ew a tie");
    }
}

*/
