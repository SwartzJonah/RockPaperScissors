// Buttons






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
            return "player";
        } else if ((playerSelection == "rock" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "scissor") 
        || (playerSelection == "scissor" && computerSelection == "rock")){
            return "computer";
        } else{
            return "tie";
        }
}

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    playRound("rock", computerPlay());
  });
  
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    playRound("paper", computerPlay());
  });

const scissorBtn = document.querySelector('#scissorBtn');
scissorBtn.addEventListener('click', () => {
    playRound("scissor", computerPlay());
  });


        
function game(){
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



