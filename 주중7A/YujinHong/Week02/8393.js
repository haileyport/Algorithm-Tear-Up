// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim();

const num = Number(input);

let sum = 0;

for (let i = 1; i <= num; i++) {
  sum = sum + i;
}

console.log(sum);
