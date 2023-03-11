"use strict";
//Append Players in "player Ul"
function appendPlayers() {
    players.forEach(player => {
        const li = document.createElement("li");
        li.innerText = player + " ";
        playerUl.append(li);
        li.addEventListener("click", () => { removePlayers(player); });
    });
}
// Score Board
function scoreBoard() {
    startContainer.style.display = "none";
    scoreBoardDiv.style.display = "flex";
    returnBtn.addEventListener("click", returnToStart);
}
// Game Setup
function gameSetup() {
    startContainer.style.display = "none";
    gameSetupDiv.style.display = "flex";
    addPlayerInput.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            addPlayer(addPlayerInput.value);
        }
    });
}
// Add one or more Players (max 6 players)
function addPlayer(name) {
    playerUl.innerText = "";
    if (addPlayerInput.value === "") {
        appendPopup();
        p.innerText = "";
        p.innerHTML = "You dont have a name? <br> Try again pleace..";
    }
    else if (players.length < 6) {
        players.push(name);
        addPlayerInput.value = "";
        appendPlayers();
    }
    else {
        appendPopup();
        p.innerText = "";
        p.innerHTML = "There will be too many of you! <br> Start now instead..";
    }
}
// Removes player from array and ul
function removePlayers(player) {
    const index = players.indexOf(player);
    players.splice(index, 1);
    playerUl.innerText = "";
    appendPlayers();
}
// START
function returnToStart() {
    i = 0;
    gameSetupDiv.style.display = "none";
    scoreBoardDiv.style.display = "none";
    startContainer.style.display = "flex";
    scoreKeeperDiv.style.display = "none";
    gameBoardDiv.style.display = "none";
}
