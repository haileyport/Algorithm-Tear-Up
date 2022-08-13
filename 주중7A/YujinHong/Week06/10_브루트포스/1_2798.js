const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const cards = input[1].split(" ").map(Number);
const cutline = input[0].split(" ")[1];

let max = 0;
let sum = 0;

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      sum = cards[i] + cards[j] + cards[k];
      if (sum > max && sum <= cutline) {
        max = sum;
      }
    }
  }
}

console.log(max);
