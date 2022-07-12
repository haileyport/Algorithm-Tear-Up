// N이 첫째줄에 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력
// N은 100,000보다 작거나 같은 자연수  

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

let N = parseInt(input[0]);
let result = '';

for (let i = 1; i <= N; i++) {
  result += i + '\n';
}

console.log(result);