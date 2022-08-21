let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let subject = Number(input[0]);

let score = input[1].split(" ");
let scoreNum = [];
for (let i = 0; i < subject; i++) {
  scoreNum.push(Number(score[i]));
}

let maxScore = scoreNum[0];
for (let i = 1; i < scoreNum.length; i++) {
  if (maxScore < scoreNum[i]) {
    maxScore = scoreNum[i];
  }
}

let newScore = [];
newScore = scoreNum.map(function (score) {
  return (score / maxScore) * 100;
});

let scoreSum = newScore.reduce(function (acc, cur) {
  return acc + cur;
});

console.log(scoreSum / subject);
