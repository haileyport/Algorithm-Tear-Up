const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const climbed = Number(input[0]);
const slipped = Number(input[1]);
const tree = Number(input[2]);

let days = Math.ceil((tree - climbed) / (climbed - slipped)) + 1

console.log(days);