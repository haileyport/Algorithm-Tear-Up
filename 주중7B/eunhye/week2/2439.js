//별 찍기 - 1
//repeat

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(input[0]);

let ans = "";

for (i = 1; i <= a; i++) {
  const blank = " ";
  const star = "*";
  ans += `${blank.repeat(a - i)}${star.repeat(i)}\n`;
}

console.log(ans);
