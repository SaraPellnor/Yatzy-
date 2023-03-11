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
yatzydBtn.addEventListener("click", checkPlayers);
const yatzyMaxidBtn = document.querySelector(".chooseMaxiYatzy--btn");
yatzyMaxidBtn.addEventListener("click", () => { });
// Score Board Globals
const scoreBoardDiv = document.querySelector(".scoreBoard--div");
const returnBtn = document.querySelector(".return--btn");
// Game Setup Globals
const gameSetupDiv = document.querySelector(".gameSetup--div");
const addPlayerInput = document.querySelector(".addPlayer--input");
// Add Player Globals
const playerUl = document.querySelector(".player--ul");
let i = 0;
let players = [];
let curentPlayer = players[i];
// Global Game Board
const scoreKeeperDiv = document.querySelector(".scoreKeeper--div");
const gameTable = document.querySelector(".game--table");
const gameBoardDiv = document.querySelector(".gameBoard--div");
const savedDiceDiv = document.querySelector(".savedDice--div");
const diceBoardDiv = document.querySelector(".diceBoard--div");
const tossDiceBtn = document.querySelector(".tossDice--btn");
tossDiceBtn.addEventListener("click", () => { rollDice(); });
const endGameBtn = document.querySelector(".endGame--btn");
endGameBtn.addEventListener("click", () => { returnToStart(); });
const gameSets = [
    "Ones", "Twos", "Threes", "Fours", "Fives", "Sixes",
    "One pair", "Two pair", "Three of a kind",
    "Four of a kind", "Full House", "Small Straight",
    "Large Straight", "Yatzy", "Chance"
];
let countRolls = [];
let score = [];
let sum = 0;
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
