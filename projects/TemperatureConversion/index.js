const textBox = document.getElementById("text-box");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultBox = document.getElementById("result");

toFahrenheit.checked = true;

function convert() {
    const input = parseFloat(textBox.value);

    if (isNaN(input)) {
        resultBox.textContent = "Please enter a valid number";
        resultBox.style.color = "red";
        return;
    }

    let result;
    if (toFahrenheit.checked) {
        result = (input * 9) / 5 + 32;
        resultBox.textContent = `${result.toFixed(2)}°F`;
    } else {
        result = ((input - 32) * 5) / 9;
        resultBox.textContent = `${result.toFixed(2)}°C`;
    }
    resultBox.style.color = "black";
}