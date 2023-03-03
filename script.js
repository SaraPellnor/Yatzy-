"use strict";
// Global imports from html
const h1 = document.querySelector("h1");
h1 === null || h1 === void 0 ? void 0 : h1.addEventListener("click", returnToStart);
const startContainer = document.querySelector(".startContainer--div");
const newGameBtn = document.querySelector(".newGame--btn");
newGameBtn.addEventListener("click", gameSetup);
const scoreBoardBtn = document.querySelector(".scoreBoard--btn");
scoreBoardBtn.addEventListener("click", scoreBoard);
const yatzydBtn = document.querySelector(".chooseYatzy--btn");
yatzydBtn.addEventListener("click", gameBoard);
const yatzyMaxidBtn = document.querySelector(".chooseMaxiYatzy--btn");
yatzyMaxidBtn.addEventListener("click", () => { });
// Global Game Board
const scoreKeeperDiv = document.querySelector(".scoreKeeper--div");
const gameTable = document.querySelector(".game--table");
const gameBoardDiv = document.querySelector(".gameBoard--div");
const diceBoardDiv = document.querySelector(".diceBoard--div");
const tossDiceBtn = document.querySelector(".tossDice--btn");
tossDiceBtn.addEventListener("click", rollDice);
const dices = diceBoardDiv.querySelectorAll("div");
const gameSets = [
    "Ones", "Twos", "Threes", "Fours", "Fives", "Sixes",
    "Three of a kind", "Four of a kind", "Full House",
    "Small Straight", "Large Stright", "Yatzy", "Chance"
];
const savedDiceDiv = document.querySelector(".savedDice--div");
const savedValue = [];
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
// Game Board
function gameBoard() {
    gameSetupDiv.style.display = "none";
    scoreKeeperDiv.style.display = "flex";
    gameBoardDiv.style.display = "flex";
    const tdYatzy = document.createElement("td");
    tdYatzy.innerText = "YATZY";
    gameTable.append(tdYatzy);
    players.forEach(player => {
        const tdRow = document.createElement("td");
        tdRow.innerText = player;
        gameTable.append(tdRow);
    });
    gameSets.forEach(game => {
        const trColumn = document.createElement("tr");
        trColumn.innerText = game;
        gameTable.append(trColumn);
    });
}
// Function to roll the dice and random get the sum 
function rollDice() {
    dices.forEach((div) => {
        div.classList.remove('roll-animation');
        void div.offsetWidth;
        div.classList.add("roll-animation");
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => {
            div.style.backgroundImage = `url(./assets/${randomNumber}.png)`;
            div.addEventListener("click", () => { useDice(div, randomNumber); });
        }, 4000);
    });
    tossDiceBtn.removeEventListener("click", rollDice);
    tossDiceBtn.addEventListener("click", rollDiceTwo);
}
function useDice(div, randomNumber) {
    savedDiceDiv.innerHTML = "";
    diceBoardDiv.removeChild(div);
    savedValue.push(randomNumber);
    savedValue.forEach(number => {
        const savedDice = document.createElement("div");
        savedDiceDiv === null || savedDiceDiv === void 0 ? void 0 : savedDiceDiv.append(savedDice);
        savedDice.style.backgroundImage = `url(./assets/${number}.png)`;
        savedDice.addEventListener("click", () => { removeDice(savedDice, number); });
    });
    tossDiceBtn.removeEventListener("click", rollDice);
    tossDiceBtn.addEventListener("click", rollDiceTwo);
}
function removeDice(savedDice, number) {
    diceBoardDiv.append(savedDice);
    savedValue.forEach(value => {
        if (value === number) {
            const i = savedValue.indexOf(value);
            savedValue.splice(i, 1);
        }
    });
    savedDice.addEventListener("click", () => { useDice(savedDice, number); });
    tossDiceBtn.removeEventListener("click", rollDice);
    tossDiceBtn.addEventListener("click", () => { rollDiceTwo; });
}
function rollDiceTwo() {
    const dice = diceBoardDiv.querySelectorAll("div");
    console.log(dice);
    // dice.classList.add("roll-animation");
}
// START
function returnToStart() {
    gameSetupDiv.style.display = "none";
    scoreBoardDiv.style.display = "none";
    startContainer.style.display = "flex";
    scoreKeeperDiv.style.display = "none";
    gameBoardDiv.style.display = "none";
}
