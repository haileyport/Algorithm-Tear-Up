const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
const score = input[1].split(' ');
const maxScore = Math.max(...score);
const manipulScoreArr = [];
for (let i = 0; i < n; i++) {
    manipulScoreArr[i] = parseFloat(parseInt(score[i]) / maxScore) * 100
}
const totalScore = manipulScoreArr.reduce((prev, curr) => prev + curr, 0);
console.log(parseFloat(totalScore / n));