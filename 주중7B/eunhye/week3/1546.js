//평균

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

const subject = input[0];
const origin_score = input[1].split(" ").map(Number);

const max = Math.max(...origin_score);

const new_score = [];

for (i = 0; i < origin_score.length; i++) {
  new_score.push((origin_score[i] / max) * 100);
}

const sum = new_score.reduce((a, b) => a + b);
console.log(sum / new_score.length);
