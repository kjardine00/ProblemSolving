const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf-8").split(/\r?\n/);

const oneLine =
  "Game 1: 2 red, 2 green; 1 red, 1 green, 2 blue; 3 blue, 3 red, 3 green; 1 blue, 3 green, 7 red; 5 red, 3 green, 1 blue";

const test = fs.readFileSync("./test.txt", "utf-8").split(/\r?\n/);

// There is a bag with a secret amount of red, green, and blue cubes

// randomly a handful of cubes will be shown in each game seperated by a ';'
// the handful goes back into the bag

// Which games would have been possible with only
const numOfRed = 12;
const numOfGreen = 13;
const numOfBlue = 14;

// it would be helpful to turn each line into an obj so I can access its parts
const gameObject = {
  id: 0,
  handfuls: [
    {
      red: 2,
      green: 2,
      blue: 0,
    },
    {
      red: 1,
      green: 1,
      blue: 2,
    },
    {
      red: 3,
      green: 3,
      blue: 3,
    },
    {
      red: 7,
      green: 3,
      blue: 1,
    },
    {
      red: 5,
      green: 3,
      blue: 1,
    },
  ],
};

convertLineToObj = (line) => {
  let game = new Object();
  game.handfuls = [];

  let str = "";

  // Get the GameID
  for (const char of line) {
    str += char;
    if (char === ":") {
      game.id = str.replace("Game ", "").replace(":", "");
      str = "";
    }
  }

  // Get the handfuls and amounts of colors
  str2 = str.split(",").join("");
  handfuls = str2.split(";");

  for (const set of handfuls) {
    let parse = "";
    let handful = new Object();

    for (const char of set) {
      parse += char;
      if (parse.includes("red")) {
        handful.red = parseInt(parse.replace(" red", ""));
        parse = "";
      } else if (parse.includes("green")) {
        handful.green = parseInt(parse.replace(" green", ""));
        parse = "";
      } else if (parse.includes("blue")) {
        handful.blue = parseInt(parse.replace(" blue", ""));
        parse = "";
      }
    }
    game.handfuls.push(handful);
  }

  return game;
};

getAllPossible = (games) => {
  possible = [];
  games.forEach((game) => {
    isPossible = true;
    // console.log('game', game.id);
    game.handfuls.forEach((handful) => {
      // console.log('red', handful.red, 'green', handful.green, 'blue', handful.blue)
      if (
        handful.red > numOfRed ||
        handful.green > numOfGreen ||
        handful.blue > numOfBlue
      ) {
        isPossible = false;
      }
    });
    // console.log('possible', isPossible)
    if (isPossible) {
      possible.push(parseInt(game.id));
    }
  });
  return possible;
};

sum = (acc, num) => {
  return acc + num;
};

// Get the power of the cubes
// Get the fewest number of cubes of each color

fewestNumOfCubes = (game) => {
      let fewestRed = 0;
      let fewestGreen = 0;
      let fewestBlue = 0;
      game.handfuls.forEach((handful) => {
      if (handful.red > fewestRed) {
        fewestRed = handful.red;
      }
      if (handful.green > fewestGreen) {
        fewestGreen = handful.green;
      }
      if (handful.blue > fewestBlue) {
        fewestBlue = handful.blue;
      }
    });
    return fewestRed * fewestGreen * fewestBlue;
};

answerPart2 = (input) => {
  const gamesAsObjects = input.map(convertLineToObj);
  const powerOfSet = gamesAsObjects.map(fewestNumOfCubes);
  const answer = powerOfSet.reduce(sum, 0);

  console.log("the answer is: ", answer);
};

answerPart2(data);
