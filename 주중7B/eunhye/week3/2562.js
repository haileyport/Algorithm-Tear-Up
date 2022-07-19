//최댓값

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");

let ans = Number(input[0]);
let count = 1;
for (i = 1; i < input.length; i++) {
  const num = Number(input[i]);
  if (ans < num) {
    ans = num;
    count = i + 1;
  }
}
console.log(`${ans} ${count}`);
