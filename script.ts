// Global imports from html
const newGameBtn = document.querySelector(".newGame--btn") as HTMLButtonElement
newGameBtn.addEventListener("click",() => {gameSetup()})

const scoreBoardBtn = document.querySelector(".scoreBoard--btn") as HTMLButtonElement
scoreBoardBtn.addEventListener("click",() => {scoreBoard()})


// Score Board Globals
const scoreBoardDiv = document.querySelector(".scoreBoard--div") as HTMLDivElement
const returnBtn = document.querySelector(".return--btn") as HTMLButtonElement

// Game Setup Globals
const gameSetupDiv = document.querySelector(".gameSetup--div") as HTMLDivElement
const addPlayerInput = document.querySelector(".addPlayer--input") as HTMLInputElement

// Game Setup
function gameSetup() {
    newGameBtn.style.display = "none"
    scoreBoardBtn.style.display = "none"
    gameSetupDiv.style.display = "flex"

    addPlayerInput.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            addPlayer(addPlayerInput.value)
        }
    })
}

function addPlayer(name: String) {   //<-------------make li for each name in hard koded ul
    console.log(name);
    
}

// Score Board
function scoreBoard() {
    newGameBtn.style.display = "none"
    scoreBoardBtn.style.display = "none"
    scoreBoardDiv.style.display = "block"

    returnBtn.addEventListener("click", () => {returnToStart()})
}

// START
function returnToStart () {
    scoreBoardDiv.style.display = "none"
    newGameBtn.style.display = "block"
    scoreBoardBtn.style.display = "block"
}