const minNum = 1;
const maxNum = 100;

let answer;
let attempts;

const input = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const resetBtn = document.getElementById("reset-btn");

function initializeGame() {
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0;
    feedback.textContent = "";
    feedback.className = "result-box";
    attemptsDisplay.textContent = "Attempts: 0";
    input.value = "";
    input.disabled = false;
    guessBtn.disabled = false;
}

guessBtn.addEventListener("click", () => {
    const guess = Number(input.value);

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        feedback.textContent = `Please enter a number between ${minNum} and ${maxNum}.`;
        feedback.className = "result-box error";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (guess < answer) {
        feedback.textContent = "Too low! Try again.";
        feedback.className = "result-box error";
    } else if (guess > answer) {
        feedback.textContent = "Too high! Try again.";
        feedback.className = "result-box error";
    } else {
        feedback.textContent = `Correct! The answer is ${answer}.`;
        feedback.className = "result-box success";
        input.disabled = true;
        guessBtn.disabled = true;
    }
});

resetBtn.addEventListener("click", initializeGame);

initializeGame();
