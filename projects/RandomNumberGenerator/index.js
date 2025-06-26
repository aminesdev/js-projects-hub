const randomNum = document.getElementById("randomNum");
const generateBtn = document.getElementById("generate");

generateBtn.onclick = function () {
    const min = Number(document.getElementById("min").value);
    const max = Number(document.getElementById("max").value);

    // Validate the range
    if (isNaN(min) || isNaN(max)) {
        randomNum.textContent = "Please enter valid numbers";
        return;
    }

    if (max <= min) {
        randomNum.textContent = "Max must be greater than Min";
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum.textContent = result;
};
