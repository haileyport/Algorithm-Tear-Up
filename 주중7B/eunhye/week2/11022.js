//A+B - 8

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(input[0]);
let ans = "";
for (i = 1; i <= a; i++) {
  const num = input[i].split(" ").map(Number);
  ans += `Case #${i}: ${num[0]} + ${num[1]} = ${num[0] + num[1]}\n`;
}
console.log(ans);
