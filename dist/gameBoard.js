"use strict";
// ----- Game Board
function gameBoard() {
    var _a;
    // sets active player to key in LS
    localStorage.setItem("player", JSON.stringify(players[i]));
    // Visible
    gameSetupDiv.style.display = "none";
    scoreKeeperDiv.style.display = "flex";
    gameBoardDiv.style.display = "flex";
    // Creates the table
    const table = document.querySelector(".game--table");
    const headerRow = (_a = table.tHead) === null || _a === void 0 ? void 0 : _a.rows[0];
    if (headerRow) {
        headerRow.innerHTML = "<th>YATZY</th>";
    }
    // Creates the header row for the players
    players.forEach(player => {
        const th = document.createElement('th');
        th.setAttribute("class", player);
        th.textContent = player;
        headerRow === null || headerRow === void 0 ? void 0 : headerRow.appendChild(th);
    });
    // Nested Function: Changes the backgroundcolor on the current player div
    currentPlayerColor();
    // creates the table row and table data for the game sets
    gameSets.forEach((game, index) => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.setAttribute("class", "game");
        td.addEventListener("click", () => { addScore(game, index); });
        td.textContent = game;
        tr.appendChild(td);
        // Sets the personaly class to all cells in the table
        players.forEach(player => {
            const td = document.createElement('td');
            td.setAttribute("class", `${player.toLowerCase()}--${index}`);
            tr.appendChild(td);
        });
        table.tBodies[0].appendChild(tr);
    });
}
// ----- Roll Dice
function rollDice() {
    // pusching 1 to array for each time you click "roll dice"
    countRolls.push(1);
    // Starts the roll animation on the dice
    const DiceBoardChild = diceBoardDiv.querySelectorAll("div");
    DiceBoardChild.forEach((child) => {
        child.removeEventListener("click", () => { useDice(child, randomNumber); });
        child.classList.remove('roll-animation');
        void child.offsetWidth;
        child.classList.add("roll-animation");
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        // Sets timeout on the appending on the dice values
        // Sets eventlisteners on the dice
        setTimeout(() => {
            child.style.backgroundImage = `url(./assets/${randomNumber}.png)`;
            child.setAttribute("value", JSON.stringify(randomNumber));
            child.addEventListener("click", () => { useDice(child, randomNumber); });
        }, 4000);
    });
    // Nested Function: Limits the number of rolls to three
    countRollDice();
}
// ----- Use Dice
function useDice(dice, randomNumber) {
    // Moves the dice to saved Dice Div
    const parent = dice.parentNode;
    parent === null || parent === void 0 ? void 0 : parent.removeChild(dice);
    savedDiceDiv.append(dice);
    // Removing the roll animation
    const savedDiceChild = savedDiceDiv.querySelectorAll("div");
    savedDiceChild.forEach(child => {
        child.classList.remove('roll-animation');
    });
    // Changes event to "Remove Dice"
    dice.removeEventListener("click", () => { useDice(dice, randomNumber); });
    dice.addEventListener("click", () => { removeDice(dice, randomNumber); });
}
// ----- Remove Dice and changes event to "Use Dice"
function removeDice(dice, randomNumber) {
    const parent = dice.parentNode;
    parent === null || parent === void 0 ? void 0 : parent.removeChild(dice);
    diceBoardDiv.append(dice);
    dice.addEventListener("click", () => { useDice(dice, randomNumber); });
    dice.removeEventListener("click", () => { removeDice(dice, randomNumber); });
}
// ----- Add score to Table
function addScore(game, index) {
    // Make it possible to score points if one achieves a YATZY
    // even though the dice have only been rolled once.
    if ((game == "Yatzy") &&
        (countRolls.length == 1) &&
        (score.length == 5) &&
        (score.every((num, i, arr) => num === arr[0]))) {
        countRolls.length = 3;
        game = "";
    }
    // Make it impossible to score points 
    // before rolling the dice three times
    if (countRolls.length <= 2)
        return;
    // Empty final score
    score = [];
    // Nested Function:
    // Adding points to the array and return sum
    // and remove Dice to Dice Board
    countScores();
    // Nested Function: Checking the game rules
    checkRules(game);
    // Canceling the add score function if false
    if (checkRules(game) == false)
        return;
    // Resets the background color of the element
    const allGameDivs = document.querySelectorAll(".game");
    allGameDivs.forEach(div => {
        div.style.backgroundColor = "initial";
    });
    // Places the score in the correct cell
    const player = localStorage.getItem("player");
    const cell = document.querySelector(`.${player === null || player === void 0 ? void 0 : player.toLowerCase().replace(/"/g, '')}--${index}`);
    cell.innerText = JSON.stringify(sum);
    // Sets countRolls to zero
    countRolls = [];
    // Nested Function: Removes current player background color
    standardPlayerColor();
    // Nested Function: Changing current player
    setCurrentPlayer();
    // Visible
    tossDiceBtn.style.display = "block";
}
