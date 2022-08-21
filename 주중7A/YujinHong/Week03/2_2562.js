const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

let max = Number(input[0]);
let maxIndex = 0;

for (let i = 1; i < input.length; i++) {
  let currentNum = Number(input[i]);

  if (max < currentNum) {
    max = currentNum;
    maxIndex = i;
  }
}

console.log(max);
console.log(maxIndex + 1);
