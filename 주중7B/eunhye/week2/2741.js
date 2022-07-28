//N 찍기

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(input[0]);
let ans = "";
for (i = 1; i <= a; i++) {
  ans += `${i}\n`;
}
console.log(ans);
