//그룹 단어 체커

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n");

let count = input[0];

for (i = 1; i < input.length; i++) {
  const arr = [];
  let status;
  for (k = 0; k < input[i].length; k++) {
    if (arr.includes(input[i][k]) && status !== input[i][k]) {
      count--;
      break;
    } else {
      arr.push(input[i][k]);
      status = input[i][k];
    }
  }
}

console.log(count);
