//기찍 N

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(input[0]);
let ans = "";
let count = a;
for (i = 1; i <= a; i++) {
  ans += `${count}\n`;
  count = count - 1;
}
console.log(ans);
