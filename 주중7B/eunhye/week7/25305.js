//커트라인
//7:11~18

//N명 응시, 점수가 높은 k명은 상을 받음
//커트라인: k명 중 점수가 제일 낮은 사람

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
let input = raw.trim().split("\n");
const info = input.shift().split(" ").map(Number);
input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const winner = input.slice(0, info[1]);
console.log(Math.min(...winner));
