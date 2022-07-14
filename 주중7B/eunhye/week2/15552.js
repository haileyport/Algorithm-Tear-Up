//빠른 A+B

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(input[0]);

let ans = "";

for (i = 1; i <= a; i++) {
  tmp = input[i].split(" ");
  ans += `${parseInt(tmp[0]) + parseInt(tmp[1])} `;
}

console.log(ans);
