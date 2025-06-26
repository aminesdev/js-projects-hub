let number = 0;

document.getElementById("number").textContent = String(number);

document.getElementById("increase").onclick = function () {
    number++; 
    document.getElementById("number").textContent = String(number);
}

document.getElementById("decrease").onclick = function () {
    number--;
    document.getElementById("number").textContent = String(number);
}

document.getElementById("reset").onclick = function () {
    number = 0;
    document.getElementById("number").textContent = String(number);
}
