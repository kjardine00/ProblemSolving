const fs = require("fs");

// 1 What floor does Santa end up on
// ( --> go UP 1 floor
// ) --> go DOWN 1 floor

function question1() {
  fs.readFile("./instructions.txt", (err, data) => {
    console.time("timer");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const floor = directionsArray.reduce((acc, currentItem) => {
      if (currentItem === "(") {
        return (acc += 1);
      } else if (currentItem === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("timer");
    console.log("floor: ", floor);
  });
}

question1();

// 2 - When does Santa first enter the basement?

function question2() {
  fs.readFile("./instructions.txt", (err, data) => {
    console.time("timer2");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const character = directionsArray.some((currentItem) => {
      if (currentItem === "(") {
        (accumulator += 1);
      } else if (currentItem === ")") {
        (accumulator -= 1);
      }
      counter++;
      return accumulator < 0;
    });
    console.timeEnd("timer2");
    console.log("Basement entered at: ", counter);
  });
}

question2();