let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const reset = document.querySelector("#reset-btn");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};




const drawGame =  () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};




const playGame = (userChoice) => {
    console.log("User choice :",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice :",compChoice);

    const userWin = () => {
    userScore++;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = userScore;
    }

    const compWin = () => {
        compScore++;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }

    if (userChoice === compChoice) {
        drawGame();
    }else{
        if (userChoice === "rock" && compChoice === "paper") {
            console.log("computer win");
            compWin();
        } else if (userChoice === "rock" && compChoice === "scissors") {
            console.log("User win");
            userWin();
        } else if (userChoice === "paper" && compChoice === "rock") {
            console.log("User win");
            userWin();
        } else if (userChoice === "paper" && compChoice === "scissors") {
            console.log("computer win");
            compWin();
        } else if (userChoice === "scissors" && compChoice === "rock") {
            console.log("computer win");
            compWin();
        } else if (userChoice === "scissors" && compChoice === "paper") {
            console.log("user win");
            userWin();
        }
        
    }
    
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

const resetBtn = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = " Play your move.";
    msg.style.backgroundColor = "#081b31";
};

reset.addEventListener("click",resetBtn);



