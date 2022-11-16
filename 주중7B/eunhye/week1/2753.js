//윤년

const fs = require("fs");
const input = fs.readFileSync("./../text.txt").toString().split("\n");
const a = parseInt(input);

//문제를 잘 읽자!
const double = a % 100 !== 0 || a % 400 === 0;

if (a % 4 === 0 && double) {
  console.log(1);
} else {
  console.log(0);
}
