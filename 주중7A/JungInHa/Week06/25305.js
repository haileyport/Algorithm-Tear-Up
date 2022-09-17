const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const firstLine = input[0].split(' ');
const winners = Number(firstLine[1]);
const scores = input[1].split(' ').map(n => Number(n));

scores.sort(function(a, b) {
  return b - a;
});

console.log(scores[winners - 1]);