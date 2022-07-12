// n이 주어졌을 때, 1부터 n까지 합을 구한다.
// 입력은 1 ~ 10,000 

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

let n = parseInt(input[0]);
let result = 0;

for(let i = 1; i <= n; i++) {
  result += i;
}

console.log(result);