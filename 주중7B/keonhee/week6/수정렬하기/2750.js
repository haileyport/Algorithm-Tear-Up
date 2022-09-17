const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const arr = input.slice(1).map(Number);

function solution(N, arr) {
  arr = arr.sort((a, b) => a - b).map((num) => console.log(num));
}

solution(N, arr);
