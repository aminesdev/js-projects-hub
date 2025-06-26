function rollDice() {
    const numOfDice = parseInt(document.getElementById("numOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];

    diceResult.textContent = "";
    diceImages.innerHTML = "";

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        const img = document.createElement("img");
        img.src = `dice_icons /${value}.png`;
        img.width = 30;
        img.height = 30;
        img.style.margin = "5px";

        diceImages.appendChild(img);
    }

    diceResult.textContent = `You rolled: ${values.join(", ")}`;
}
