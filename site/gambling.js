let p1WinCount = 0;
let p2WinCount = 0;

function gamble() {
    const maxValue = document.getElementById("maxValue");
    const p1Guess = document.getElementById("p1Guess");
    const p2Guess = document.getElementById("p2Guess");

    const maxVal = Number(maxValue.value);
    const p1Value = Number(p1Guess.value);
    const p2Value = Number(p2Guess.value);

    if (isNaN(maxVal) || isNaN(p1Value) || isNaN(p2Value) || maxVal <= 0) {
        document.getElementById("display").innerHTML = "Please enter valid numbers.";
        return;
    }

    let rngd = Math.floor(Math.random() * (maxVal + 1));

    let winner = "";
    if (Math.abs(rngd - p1Value) < Math.abs(rngd - p2Value)) {
        winner = "Player 1 wins!";
        p1WinCount++;
    } else if (Math.abs(rngd - p1Value) > Math.abs(rngd - p2Value)) {
        winner = "Player 2 wins!";
        p2WinCount++;
    } else {
        winner = "It's a tie!";
    }

    document.getElementById("display").innerHTML = `Random Number: ${rngd}<br>${winner}`;
    document.getElementById("p1Wins").innerText = p1WinCount;
    document.getElementById("p2Wins").innerText = p2WinCount;
}

function resetCounts() {
    p1WinCount = 0;
    p2WinCount = 0;
    document.getElementById("p1Wins").innerText = p1WinCount;
    document.getElementById("p2Wins").innerText = p2WinCount;
    document.getElementById("display").innerText = "";
}

document.addEventListener('DOMContentLoaded', (event) => {
    const gambleButton = document.getElementById('gambleButton');
    const resetButton = document.getElementById('resetButton');

    // Ensure the elements exist before attaching the event listeners
    if (gambleButton && resetButton) {
        gambleButton.addEventListener('click', gamble);
        resetButton.addEventListener('click', resetCounts);
    }
});
