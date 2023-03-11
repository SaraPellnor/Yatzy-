"use strict";
function checkPlayers() {
    if (players.length < 2) {
        appendPopup();
        p.innerText = "";
        p.innerHTML = "You cant play alone...";
    }
    else {
        gameBoard();
    }
}
function curentPlayerColor() {
    const curentPlayerDiv = document.querySelector(`.${players[i]}`);
    curentPlayerDiv.style.backgroundColor = "rgb(95, 121, 95)";
}
function standardPlayerColor() {
    const curentPlayerDiv = document.querySelector(`.${players[i]}`);
    curentPlayerDiv.style.backgroundColor = "#f2f2f2";
}
function setCurentPlayer() {
    console.log(players.length);
    if (players.length - 1 > i) {
        i++;
        curentPlayerColor();
    }
    else {
        i = 0;
        curentPlayerColor();
    }
    localStorage.setItem("player", JSON.stringify(players[i]));
}
function countRollDice() {
    if (countRolls.length > 2) {
        tossDiceBtn.style.display = "none";
        return blincAnimation();
    }
}
function countScores() {
    const savedDiceDivChild = savedDiceDiv.querySelectorAll("div");
    savedDiceDivChild.forEach(dice => {
        const num = dice.getAttribute("value");
        score.push(parseInt(num));
    });
}
