const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;

    let result = "";
    let resultClass = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        resultClass = "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        resultClass = "win";
    } else {
        result = "You lose!";
        resultClass = "lose";
    }

    resultDisplay.textContent = result;
    resultDisplay.className = "result-box";
    resultDisplay.classList.add(resultClass);
}