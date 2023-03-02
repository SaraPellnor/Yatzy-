
// Global imports from html
const h1 = document.querySelector("h1") as HTMLHeadingElement
h1?.addEventListener("click", () => {returnToStart()})

const startContainer = document.querySelector(".startContainer--div") as HTMLDivElement

const newGameBtn = document.querySelector(".newGame--btn") as HTMLButtonElement
newGameBtn.addEventListener("click", () => { gameSetup() })

const scoreBoardBtn = document.querySelector(".scoreBoard--btn") as HTMLButtonElement
scoreBoardBtn.addEventListener("click", () => { scoreBoard() })

const yatzydBtn = document.querySelector(".chooseYatzy--btn") as HTMLButtonElement
yatzydBtn.addEventListener("click", () => { gameBoard() })

const yatzyMaxidBtn = document.querySelector(".chooseMaxiYatzy--btn") as HTMLButtonElement
yatzyMaxidBtn.addEventListener("click", () => { /* */ })

const scoreKeeperDiv = document.querySelector(".scoreKeeper--div") as HTMLDivElement

const gameBoardDiv = document.querySelector(".gameBoard--div") as HTMLDivElement

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

// Score Board Globals
const scoreBoardDiv = document.querySelector(".scoreBoard--div") as HTMLDivElement
const returnBtn = document.querySelector(".return--btn") as HTMLButtonElement

// Game Setup Globals
const gameSetupDiv = document.querySelector(".gameSetup--div") as HTMLDivElement
const addPlayerInput = document.querySelector(".addPlayer--input") as HTMLInputElement

// Add Player Globals
const playerUl = document.querySelector(".player--ul") as HTMLDivElement
const players: string[] = []

const appendPlayers = () => players.forEach(player => {
    const li = document.createElement("li") as HTMLLIElement
    li.innerText = player + " "
    playerUl.append(li)
    li.addEventListener("click", () => { removePlayers(player) })
});

// Score Board
function scoreBoard() {
    startContainer.style.display = "none"
    scoreBoardDiv.style.display = "flex"

    returnBtn.addEventListener("click", () => { returnToStart() })
}

// Game Setup
function gameSetup() {
    startContainer.style.display = "none"
    gameSetupDiv.style.display = "flex"

    addPlayerInput.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            addPlayer(addPlayerInput.value)
        }
    })
}
// Add one or more Players (max 6 players)
function addPlayer(name: string) {
    playerUl.innerText = ""

    if (addPlayerInput.value === "") {
        appendPopup()
        p.innerText = ""
        p.innerHTML = "You dont have a name? <br> Try again pleace.."
    } else if (players.length < 6) {
        players.push(name)
        addPlayerInput.value = ""
        appendPlayers()
    } else {
        appendPopup()
        p.innerText = ""
        p.innerHTML = "There will be too many of you! <br> Start now instead.."
    }
}

// Removes player from array and ul
function removePlayers(player: string) {
    const index = players.indexOf(player)
    players.splice(index, 1)
    playerUl.innerText = ""
    appendPlayers()
}

function gameBoard() {
    gameSetupDiv.style.display = "none"
    scoreKeeperDiv.style.display = "flex"
    gameBoardDiv.style.display = "flex"
    

}




// START
function returnToStart() {
    gameSetupDiv.style.display = "none"
    scoreBoardDiv.style.display = "none"
    startContainer.style.display = "flex"
    scoreKeeperDiv.style.display = "none"
    gameBoardDiv.style.display = "none"

}