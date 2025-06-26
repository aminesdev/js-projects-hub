const display = document.getElementById("display");
let resultShown = false;

function appendToDisplay(input) {
    if (resultShown) {
        display.value = input;
        resultShown = false;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    resultShown = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        resultShown = true;
    } catch (error) {
        display.value = "Error";
        resultShown = true;
    }
}
