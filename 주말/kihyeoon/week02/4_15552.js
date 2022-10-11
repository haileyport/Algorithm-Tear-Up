const input = require("fs")
  .readFileSync("4_15552.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  tmp = input[i].split(" ");
  answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n";
}

console.log(answer);
