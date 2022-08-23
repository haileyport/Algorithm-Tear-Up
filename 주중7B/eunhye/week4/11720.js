//숫자의 합

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");

let ans = 0;

for (i = 0; i < Number(input[0]); i++) {
  const num = input[1];
  ans += Number(num[i]);
}

console.log(ans);
