// Global imports from html
const h1 = document.querySelector("h1") as HTMLHeadingElement
h1?.addEventListener("click", returnToStart)

const startContainer = document.querySelector(".startContainer--div") as HTMLDivElement

const newGameBtn = document.querySelector(".newGame--btn") as HTMLButtonElement
newGameBtn.addEventListener("click", gameSetup)

const scoreBoardBtn = document.querySelector(".scoreBoard--btn") as HTMLButtonElement
scoreBoardBtn.addEventListener("click", scoreBoard)

const yatzydBtn = document.querySelector(".chooseYatzy--btn") as HTMLButtonElement
yatzydBtn.addEventListener("click", checkPlayers)

const yatzyMaxidBtn = document.querySelector(".chooseMaxiYatzy--btn") as HTMLButtonElement
yatzyMaxidBtn.addEventListener("click", () => { /* */ })

// Score Board Globals
const scoreBoardDiv = document.querySelector(".scoreBoard--div") as HTMLDivElement
const returnBtn = document.querySelector(".return--btn") as HTMLButtonElement

// Game Setup Globals
const gameSetupDiv = document.querySelector(".gameSetup--div") as HTMLDivElement
const addPlayerInput = document.querySelector(".addPlayer--input") as HTMLInputElement

// Add Player Globals
const playerUl = document.querySelector(".player--ul") as HTMLDivElement
let i = 0
let players: string[] = []
let curentPlayer = players[i]

// Global Game Board
const scoreKeeperDiv = document.querySelector(".scoreKeeper--div") as HTMLDivElement
const gameTable = document.querySelector(".game--table") as HTMLTableElement
const gameBoardDiv = document.querySelector(".gameBoard--div") as HTMLDivElement
const savedDiceDiv = document.querySelector(".savedDice--div") as HTMLDivElement
const diceBoardDiv = document.querySelector(".diceBoard--div") as HTMLDivElement
const tossDiceBtn = document.querySelector(".tossDice--btn") as HTMLButtonElement
tossDiceBtn.addEventListener("click", () => { rollDice() })
const endGameBtn = document.querySelector(".endGame--btn") as HTMLButtonElement
endGameBtn.addEventListener("click", () => { returnToStart() })

const gameSets: string[] =
    [
        "Ones", "Twos", "Threes", "Fours", "Fives", "Sixes", 
        "One pair", "Two pair","Three of a kind", 
        "Four of a kind", "Full House","Small Straight", 
        "Large Straight", "Yatzy", "Chance"
    ]

let countRolls: number[] = []
let score: number[] = []
let sum = 0


// Global popup
const popupDiv = document.createElement("div")
popupDiv.setAttribute("class", "popup--div")

const p = document.createElement("p")

const popupBtnDiv = document.createElement("div")
popupBtnDiv.setAttribute("class", "popupBtn--div")

const popupPlayBtn = document.createElement("button")
popupPlayBtn.setAttribute("class", "popupPlay--btn")
popupPlayBtn.innerText = "Play"
popupPlayBtn.addEventListener("click", () => {
    popupDiv.style.display = "none"
    addPlayerInput.value = ""
    appendPlayers()
})

const popupReturnBtn = document.createElement("button")
popupReturnBtn.setAttribute("class", "popupReturn--btn")
popupReturnBtn.innerText = "Return"
popupReturnBtn.addEventListener("click", () => {
    popupDiv.style.display = "none"
    addPlayerInput.value = ""
    appendPlayers()
})

const appendPopup = () => {
    popupDiv.style.display = "flex"
    document.body.append(popupDiv)
    popupDiv.append(p, popupBtnDiv)
    popupBtnDiv.append(popupPlayBtn, popupReturnBtn)
}