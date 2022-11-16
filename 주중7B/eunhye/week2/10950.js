//A + B - 3

const fs = require("fs");
const inputraw = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(inputraw[0]);

for (i = 1; i <= a; i++) {
  const input = inputraw[i].split(" ").map(Number);
  const first = input[0];
  const second = input[1];
  console.log(`${first + second}`);
}
