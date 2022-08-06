//합

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const a = parseInt(input);

let ans = 0;

for (i = 1; i <= a; i++) {
  ans += i;
}

console.log(ans);
