// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim();

const num = Number(input);

let result = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
