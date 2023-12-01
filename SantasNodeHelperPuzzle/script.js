// Apart of https://adventofcode.com/2015/day/1

const fs = require("fs");

const data = fs.readFileSync("./instructions.txt", "utf-8");
console.time("funchallenge");

let floor = 0;
let firstTime = true;

for (let i = 0; i < data.length; i++) {
  if (data.substring(i, i + 1) === "(") {
    floor += 1;
  } else if (data.substring(i, i + 1) === ")") {
    floor -= 1;
  }

// DEBUG
//   console.log('Character: ' + i + ' floor ' + floor);

  if (floor === -1 && firstTime) {
    firstTime = false;
    console.log("Santa entered the basement on the " + (i + 1) + " character.");
  }
}

console.log("The final floor is " + floor);
console.timeEnd("funchallenge");
