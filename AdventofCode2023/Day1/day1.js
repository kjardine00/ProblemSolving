const fs = require("fs");

const data = fs.readFileSync("./input.txt", "utf-8");

/*
Day 1 Trebuchet?!

https://adventofcode.com/2023/day/1


Each line contains a value
the value is the first digit and the last digit concat
We need the sum of all the two-digit combinations
*/

// Parse all the numbers out of each line into a new array of just values with numbers
parseNumbers = (input) => {
    numbersOnly = [];
    characters = input.split("");
    characters.forEach(character => {
        if (!isNaN(character)) {
            numbersOnly.push(character);
        }
    });
    return(numbersOnly);
}

// Get only the first and last numbers of each part of the array
parseFirstandLast = (input) => {
    let first = input[0];
    let last = input[input.length - 1];

    return parseInt(first.toString() + last.toString());
}

// Sum all the pairs of digits
sumOfValues = (pairs) => {
    pairs.forEach((pair, index) => {
        console.log('pair', pair, 'index', index)
        sumOfPairs =+ pair; 
    });
    return sumOfPairs;
}

sum = (total, num) => {
    return total + num
}

// Split each line into an array of each line
const inputLines = data.split(/\r?\n/);
// Take the lines and parse out only the numbers
const digits = inputLines.map(parseNumbers);
// Take the arrays of digits and get the first and last one as a pair
const pairs = digits.map(parseFirstandLast);
// Take the pairs of numbers and sum them for a total
const answer = pairs.reduce(sum, 0);
 

console.log('answer', answer);
