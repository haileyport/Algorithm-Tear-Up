const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const arr = input.slice(1).map(Number);

function solution(N, arr) {
  const result = arr.sort((a, b) => a - b);

  // map 쓰면 통과 안됨
  console.log(result.join('\n'));
}

solution(N, arr);
