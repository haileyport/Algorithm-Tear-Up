const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// 베르트랑 공준 n보다 크고 2n 보다 작거나 같은 소스는 적어도 하나 존재.
// 예를 들어, 10 보다 크고 20보다 작은 소수는 4개 14 보다 크고 28 보다 작은 소수는 3개
// 자연수 n 이 주어졌을때 n 보다 크고 2n 보다 작거나 같은 소수의 개수
