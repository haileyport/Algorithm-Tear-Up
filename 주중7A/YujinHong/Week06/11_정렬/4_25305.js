const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const scores = input[1].split(" ").map(Number);
const sortScore = scores.sort((a, b) => b - a);

let result = "";
for (let i = 0; i < sortScore.length; i++) {
  if (i === input[0].split(" ")[1] - 1) {
    result = sortScore[i];
    break;
  }
}

console.log(result);
