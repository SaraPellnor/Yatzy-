const checkRules = (game: string) => {
  console.log(game);

  if (game == "Ones" && (!score.every(x => x === 1))) {
    p.innerText = ""
    p.innerHTML = "you can't get Ones with those dice..."
    appendPopup()
    return false
  } else if (game == "Twos" && (!score.every(x => x === 2))) {
    p.innerText = ""
    p.innerHTML = "you can't get Twos with those dice..."
    appendPopup()
    return false
  } else if (game == "Threes" && (!score.every(x => x === 3))) {
    p.innerText = ""
    p.innerHTML = "you can't get Threes with those dice..."
    appendPopup()
    return false
  } else if (game == "Fours" && (!score.every(x => x === 4))) {
    p.innerText = ""
    p.innerHTML = "you can't get Fours with those dice..."
    appendPopup()
    return false
  } else if (game == "Fives" && (!score.every(x => x === 5))) {
    p.innerText = ""
    p.innerHTML = "you can't get Fives with those dice..."
    appendPopup()
    return false
  } else if (game == "Sixes" && (!score.every(x => x === 6))) {
    p.innerText = ""
    p.innerHTML = "you can't get Sixes with those dice..."
    appendPopup()
    return false
  } else if (game === "One pair" && (score.length !== 2 || !score.every((num, i, arr) => num === arr[0]))) {
    p.innerText = ""
    p.innerHTML = "You can't get a One Pair with those dice..."
    appendPopup()
    return false
  } else if (game === "Two pair" && (score.length !== 4 || (hasTwoPairs(score) === false))) {
    p.innerText = "";
    p.innerHTML = "You can't get a Two Pair with those dice...";
    appendPopup();
    return false
  } else if (game === "Three of a kind" && (score.length !== 3 || !score.every((num, i, arr) => num === arr[0]))) {
    p.innerText = "";
    p.innerHTML = "You can't get a Three of a kind with those dice...";
    appendPopup();
    return false
  } else if (game === "Four of a kind" && (score.length !== 4 || !score.every((num, i, arr) => num === arr[0]))) {
    p.innerText = "";
    p.innerHTML = "You can't get a Four of a kind with those dice...";
    appendPopup();
    return false
  } else if (game === "Full House" && (isFullHouse(score) === false)) {
    p.innerText = "";
    p.innerHTML = "You can't get a Full House with those dice...";
    appendPopup();
    return false
  } else if (game === "Small Straight" && (isSmallStraight(score) === false)) {
    p.innerText = "";
    p.innerHTML = "You can't get a Small Straight with those dice...";
    appendPopup();
    return false
  } else if (game === "Large Straight" && (isLargeStraight(score) === false)) {
    p.innerText = "";
    p.innerHTML = "You can't get a Large Straight with those dice...";
    appendPopup();
    return false
  } else if (game === "Yatzy" && (countRolls.length !== 1) && (score.length !== 5 || !score.every((num, i, arr) => num === arr[0]))) {
    p.innerText = "";
    p.innerHTML = "You can only get Yatzy on the first roll...";
    appendPopup();
    return false
  }


}

// ----- Nested Function: hasTwoPairs
function hasTwoPairs(score: number[]): boolean {
  // Create an object used to count the occurrences of each number
  const freq: Record<number, number> = {};
  console.log("hasTwoPairs");

  //  Loop through each number in the "score" array and count the occurrences
  for (const num of score) {
    // Increase the number of occurrences for this number in the "freq" object
    freq[num] = (freq[num] || 0) + 1;
  }

  // Loop through the "freq" object and count the number of pairs that exist
  let pairs = 0;
  for (const num in freq) {
    if (freq[num] >= 2) {
      pairs++;
    }
  }

  // Return "true" if there are at least two pairs, otherwise "false"
  return pairs >= 2;
}


// ----- Nested Function: isFullHouse
function isFullHouse(score: number[]): boolean {
  // Sort the dice in ascending order
  score.sort(function (a, b) {
    return a - b;
  });

  // Check if the first three dice are the same as the last two,
  // or if the first two dice are the same as the last three
  if ((score[0] == score[1] && score[1] == score[2] && score[3] == score[4]) ||
    (score[0] == score[1] && score[2] == score[3] && score[3] == score[4])) {
    return true;
  }

  return false;
}


// ----- Nested Function: isSmallStraight
function isSmallStraight(score: number[]): boolean {
  // Sort the dice values in ascending order
  score.sort(function (a, b) {
    return a - b;
  });

  // Look for a sequence of five dice values that go from 1 to 5
  for (var i = 0; i < 5; i++) {
    if (score[i] !== i + 1) {
      return false;
    }
  }

  // If we have reached this point, it means that we have found a sequence of five dice values that go from 1 to 5
  return true;
}


// ----- Nested Function: isLargeStraight
function isLargeStraight(score: number[]): boolean {
  // Sort the dice values in ascending order
  score.sort(function (a, b) {
    return a - b;
  });

  // Look for a sequence of five dice values that go from 2 to 6
  for (var i = 0; i < 5; i++) {
    if (score[i] !== i + 2) {
      return false;
    }
  }

  // If we have reached this point, it means that we have found a sequence of five dice values that go from 2 to 6
  return true;
}