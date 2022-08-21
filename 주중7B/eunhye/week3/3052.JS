//나머지

const fs = require("fs");
const input = fs
  .readFileSync("./text.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let left = [];

for (i = 0; i < input.length; i++) {
  left.push(input[i] % 42);
}

const filtered = new Set(left).size;

console.log(filtered);
