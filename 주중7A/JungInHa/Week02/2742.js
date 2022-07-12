// 자연수 N이 첫쨰줄에 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력
// N은 100,000보다 작거나 같은 자연수  

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

let N = parseInt(input[0]);
let result = '';

for (let i = 0; i < N; i++) {
  result += (N - i) + '\n';
}

console.log(result);
