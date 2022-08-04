// 1부터 n까지 합을 구하는 프로그램을 작성하세요

const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin"));

// const input = 3;

let total = 0;

for (let i = 1; i <= input; i++) {
  total += i;
}

console.log(total);
