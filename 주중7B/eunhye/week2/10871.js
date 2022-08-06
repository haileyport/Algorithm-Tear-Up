//X보다 작은 수

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n");
const num = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

let ans = "";

for (i = 0; i < num[0]; i++) {
  if (arr[i] < num[1]) {
    ans += `${arr[i]} `;
  }
}

console.log(ans);
