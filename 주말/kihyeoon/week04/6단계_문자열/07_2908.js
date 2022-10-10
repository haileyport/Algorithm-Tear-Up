let input = require("fs")
  .readFileSync("07_2908.txt")
  .toString()
  .trim()
  .split(" ");

let first = "";
let second = "";

for (let i = 2; i >= 0; i--) {
  first += input[0][i];
  second += input[1][i];
}

console.log(Math.max(Number(first), Number(second)));