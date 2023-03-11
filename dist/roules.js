"use strict";
const checkRules = (game) => {
    console.log(game);
    if (game == "Ones" && (!score.every(x => x === 1))) {
        p.innerText = "";
        p.innerHTML = "you can't get Ones with those dice...";
        appendPopup();
        return false;
    }
    else if (game == "Twos" && (!score.every(x => x === 2))) {
        p.innerText = "";
        p.innerHTML = "you can't get Twos with those dice...";
        appendPopup();
        return false;
    }
    else if (game == "Threes" && (!score.every(x => x === 3))) {
        p.innerText = "";
        p.innerHTML = "you can't get Threes with those dice...";
        appendPopup();
        return false;
    }
    else if (game == "Fours" && (!score.every(x => x === 4))) {
        p.innerText = "";
        p.innerHTML = "you can't get Fours with those dice...";
        appendPopup();
        return false;
    }
    else if (game == "Fives" && (!score.every(x => x === 5))) {
        p.innerText = "";
        p.innerHTML = "you can't get Fives with those dice...";
        appendPopup();
        return false;
    }
    else if (game == "Sixes" && (!score.every(x => x === 6))) {
        p.innerText = "";
        p.innerHTML = "you can't get Sixes with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "One pair" && (score.length !== 2 || !score.every((num, i, arr) => num === arr[0]))) {
        p.innerText = "";
        p.innerHTML = "You can't get a One Pair with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "Two pair" && (score.length !== 4 || (hasTwoPairs(score) === false))) {
        p.innerText = "";
        p.innerHTML = "You can't get a Two Pair with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "Three of a kind" && (score.length !== 3 || !score.every((num, i, arr) => num === arr[0]))) {
        p.innerText = "";
        p.innerHTML = "You can't get a Three of a kind with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "Four of a kind" && (score.length !== 4 || !score.every((num, i, arr) => num === arr[0]))) {
        p.innerText = "";
        p.innerHTML = "You can't get a Four of a kind with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "Full House" && (isFullHouse(score) === false)) {
        p.innerText = "";
        p.innerHTML = "You can't get a Full House with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "Small Straight" && (isSmallStraight(score) === false)) {
        p.innerText = "";
        p.innerHTML = "You can't get a Small Straight with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "Large Straight" && (isLargeStraight(score) === false)) {
        p.innerText = "";
        p.innerHTML = "You can't get a Large Straight with those dice...";
        appendPopup();
        return false;
    }
    else if (game === "Yatzy" && (countRolls.length !== 1) && (score.length !== 5 || !score.every((num, i, arr) => num === arr[0]))) {
        p.innerText = "";
        p.innerHTML = "You can only get Yatzy on the first roll...";
        appendPopup();
        return false;
    }
    else { }
};
function hasTwoPairs(score) {
    // Skapa ett objekt som används för att räkna antalet förekomster för varje nummer
    const freq = {};
    console.log("hasTwoPairs");
    // Loopa genom varje nummer i arrayen "score" och räkna antalet förekomster
    for (const num of score) {
        // Öka antalet förekomster för detta nummer i "freq"-objektet
        freq[num] = (freq[num] || 0) + 1;
    }
    // Loopa genom "freq"-objektet och räkna antalet par som finns
    let pairs = 0;
    for (const num in freq) {
        if (freq[num] >= 2) {
            pairs++;
        }
    }
    // Returnera "true" om det finns minst två par, annars "false"
    return pairs >= 2;
}
function isFullHouse(score) {
    // Sortera tärningarna i stigande ordning
    score.sort(function (a, b) {
        return a - b;
    });
    // Kolla om de tre första tärningarna är samma som de två sista,
    // eller om de två första tärningarna är samma som de tre sista
    if ((score[0] == score[1] && score[1] == score[2] && score[3] == score[4]) ||
        (score[0] == score[1] && score[2] == score[3] && score[3] == score[4])) {
        return true;
    }
    return false;
}
function isSmallStraight(score) {
    // Sortera tärningsvärdena i stigande ordning
    score.sort(function (a, b) {
        return a - b;
    });
    // Titta efter en sekvens av fem tärningsvärden som går från 1 till 5
    for (var i = 0; i < 5; i++) {
        if (score[i] !== i + 1) {
            return false;
        }
    }
    // Om vi har kommit hit betyder det att vi har hittat en sekvens av fem tärningsvärden som går från 1 till 5
    return true;
}
function isLargeStraight(score) {
    // Sortera tärningsvärdena i stigande ordning
    score.sort(function (a, b) {
        return a - b;
    });
    // Titta efter en sekvens av fem tärningsvärden som går från 2 till 6
    for (var i = 0; i < 5; i++) {
        if (score[i] !== i + 2) {
            return false;
        }
    }
    // Om vi har kommit hit betyder det att vi har hittat en sekvens av fem tärningsvärden som går från 2 till 6
    return true;
}
