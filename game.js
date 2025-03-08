const choices = ["rock","paper","scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay  = document.getElementById("playerscoreDisplay")
const computerscoreDisplay  = document.getElementById("computerscoreDisplay")
const totalClicks = document.getElementById("totalClicks")
const DrawsscoreDisplay  = document.getElementById("DrawsscoreDisplay")

let PlayerScore = 0,ComputerScore=0,totalPlays=0,draws = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result=""
    
    
    if(playerChoice===computerChoice){
        result="It's a tie";
        totalPlays++;
        draws++;
    }
    else{
        switch(playerChoice){
            case "rock":
                if(computerChoice==="scissors"){
                    result="YOU WIN!"
                }
                else{
                    result="YOU LOSE!"
                }
                break;

            case "paper":
                if(computerChoice==="rock"){
                    result="YOU WIN!"
                }
                else{
                result="YOU LOSE!"
                }
                break;
            
            case "scissors":
                if(computerChoice==="paper"){
                    result="YOU WIN!"
                }
                else{
                result="YOU LOSE!"
                }
                break;
                        }
        }   
        resultDisplay.classList.remove("red","green");
     
        switch(result){
            case "YOU WIN!":
                resultDisplay.classList.add("green");
                PlayerScore++;
                totalPlays++;
                
                break;
            case "YOU LOSE!":
                resultDisplay.classList.add("red")
                ComputerScore++;
                totalPlays++;
                break;
           
        }

        playerDisplay.textContent = `PLAYER : ${playerChoice}`
        computerDisplay.textContent = `COMPUTER : ${computerChoice}`
        resultDisplay.textContent = result;
        playerscoreDisplay.textContent =`PlayerScore : ${PlayerScore}`
        computerscoreDisplay.textContent =`ComputerScore : ${ComputerScore}`
        totalClicks.textContent = `Total playes : ${totalPlays}`
        DrawsscoreDisplay.textContent = `Draws : ${draws}`
    }       // playGame function end
