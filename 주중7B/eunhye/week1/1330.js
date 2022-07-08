//두 수 비교하기

const fs = require("fs");
const input = fs.readFileSync("./../text.txt").toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > b) {
  console.log(">");
} else if (a === b) {
  console.log("==");
} else {
  console.log("<");
}
