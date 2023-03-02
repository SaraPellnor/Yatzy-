"use strict";
// Global imports from html
const h1 = document.querySelector("h1");
h1 === null || h1 === void 0 ? void 0 : h1.addEventListener("click", () => { returnToStart(); });
const startContainer = document.querySelector(".startContainer--div");
const newGameBtn = document.querySelector(".newGame--btn");
newGameBtn.addEventListener("click", () => { gameSetup(); });
const scoreBoardBtn = document.querySelector(".scoreBoard--btn");
scoreBoardBtn.addEventListener("click", () => { scoreBoard(); });
const yatzydBtn = document.querySelector(".chooseYatzy--btn");
yatzydBtn.addEventListener("click", () => { gameBoard(); });
const yatzyMaxidBtn = document.querySelector(".chooseMaxiYatzy--btn");
yatzyMaxidBtn.addEventListener("click", () => { });
const scoreKeeperDiv = document.querySelector(".scoreKeeper--div");
const gameBoardDiv = document.querySelector(".gameBoard--div");
// Global popup
const popupDiv = document.createElement("div");
popupDiv.setAttribute("class", "popup--div");
const p = document.createElement("p");
const popupBtnDiv = document.createElement("div");
popupBtnDiv.setAttribute("class", "popupBtn--div");
const popupPlayBtn = document.createElement("button");
popupPlayBtn.setAttribute("class", "popupPlay--btn");
popupPlayBtn.innerText = "Play";
popupPlayBtn.addEventListener("click", () => {
    popupDiv.style.display = "none";
    addPlayerInput.value = "";
    appendPlayers();
});
const popupReturnBtn = document.createElement("button");
popupReturnBtn.setAttribute("class", "popupReturn--btn");
popupReturnBtn.innerText = "Return";
popupReturnBtn.addEventListener("click", () => {
    popupDiv.style.display = "none";
    addPlayerInput.value = "";
    appendPlayers();
});
const appendPopup = () => {
    popupDiv.style.display = "flex";
    document.body.append(popupDiv);
    popupDiv.append(p, popupBtnDiv);
    popupBtnDiv.append(popupPlayBtn, popupReturnBtn);
};
// Score Board Globals
const scoreBoardDiv = document.querySelector(".scoreBoard--div");
const returnBtn = document.querySelector(".return--btn");
// Game Setup Globals
const gameSetupDiv = document.querySelector(".gameSetup--div");
const addPlayerInput = document.querySelector(".addPlayer--input");
// Add Player Globals
const playerUl = document.querySelector(".player--ul");
const players = [];
const appendPlayers = () => players.forEach(player => {
    const li = document.createElement("li");
    li.innerText = player + " ";
    playerUl.append(li);
    li.addEventListener("click", () => { removePlayers(player); });
});
// Score Board
function scoreBoard() {
    startContainer.style.display = "none";
    scoreBoardDiv.style.display = "flex";
    returnBtn.addEventListener("click", () => { returnToStart(); });
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
function gameBoard() {
    gameSetupDiv.style.display = "none";
    scoreKeeperDiv.style.display = "flex";
    gameBoardDiv.style.display = "flex";
}
// START
function returnToStart() {
    gameSetupDiv.style.display = "none";
    scoreBoardDiv.style.display = "none";
    startContainer.style.display = "flex";
    scoreKeeperDiv.style.display = "none";
    gameBoardDiv.style.display = "none";
}
