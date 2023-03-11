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
function currentPlayerColor() {
    const curentPlayerDiv = document.querySelector(`.${players[i]}`);
    curentPlayerDiv.style.backgroundColor = "rgb(95, 121, 95)";
}
function setCurrentPlayer() {
    console.log(players.length);
    if (players.length - 1 > i) {
        i++;
        currentPlayerColor();
    }
    else {
        i = 0;
        currentPlayerColor();
    }
    localStorage.setItem("player", JSON.stringify(players[i]));
}
function countRollDice() {
    if (countRolls.length > 2) {
        tossDiceBtn.style.display = "none";
        return blincAnimation();
    }
}
function blincAnimation() {
    const allGameDivs = document.querySelectorAll(".game");
    allGameDivs.forEach((div) => {
        div.classList.remove("blinc-animation");
        void div.offsetWidth;
        div.classList.add("blinc-animation");
        setTimeout(() => {
            div.style.backgroundColor = "rgb(243, 243, 196)";
        }, 3000);
    });
}
function countScores() {
    const savedDiceDivChild = savedDiceDiv.querySelectorAll("div");
    savedDiceDivChild.forEach(dice => {
        const num = dice.getAttribute("value");
        score.push(parseInt(num));
        diceBoardDiv.append(dice);
    });
    score.forEach((number) => {
        sum += number;
    });
    return sum;
}
function standardPlayerColor() {
    const curentPlayerDiv = document.querySelector(`.${players[i]}`);
    curentPlayerDiv.style.backgroundColor = "#f2f2f2";
}
