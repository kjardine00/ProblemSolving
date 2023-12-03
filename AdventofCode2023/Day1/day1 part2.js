const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf-8");

/*
Day 1 Trebuchet?!

https://adventofcode.com/2023/day/1


Each line contains a value
the value is the first digit and the last digit concat
We need the sum of all the two-digit combinations
*/

// Are the non numbers spelling a number?
parseSpelledNumbers = (input) => {
  numberFound = false;
  spelledNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let num = 1;
  for (spelled of spelledNumbers) {
    // console.log("input", input, "spelled", spelled, "num", num);
    if (input.includes(spelled)) {
      return num;
    } else {
      num += 1;
    }
  }
};

// Parse all the numbers out of each line into a new array of just values with numbers
parseNumbers = (input) => {
  numbersOnly = [];
  lettersOnly = "";
  characters = input.split("");
  characters.forEach((character) => {
    if (!isNaN(character)) {
      numbersOnly.push(character);
      lettersOnly = "";
    } else {
      lettersOnly += character;
      let x = parseSpelledNumbers(lettersOnly);
        if (x) {
            numbersOnly.push(x);
            lettersOnly = "";
        }
    }
  });
  // console.log(numbersOnly);
  return numbersOnly;
};

// Get only the first and last numbers of each part of the array
parseFirstandLast = (input) => {
  let first = input[0];
  let last = input[input.length - 1];

  return parseInt(first.toString() + last.toString());
};

sum = (total, num) => {
  return total + num;
};

// Split each line into an array of each line
const inputLines = data.split(/\r?\n/);
// Take the lines and parse out only the numbers
const digits = inputLines.map(parseNumbers);
// Take the arrays of digits and get the first and last one as a pair
const pairs = digits.map(parseFirstandLast);
console.log(pairs)
// Take the pairs of numbers and sum them for a total
const answer = pairs.reduce(sum, 0);

console.log("answer part 2:", answer);
