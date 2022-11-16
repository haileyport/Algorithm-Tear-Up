// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let scores = [], newScores = [];
for (let i = 0; i < Number(input[0]); i++) {
  scores = input[1].split(" ");
}
let max = Math.max(...scores);
let sum = 0;
for (let i = 0; i < Number(input[0]); i++) {
  newScores[i] = scores[i] / max * 100;
  sum += newScores[i];
}
console.log(sum / input[0]);
