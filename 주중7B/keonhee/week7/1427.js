const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +input[0];

function solution(num) {
  const result = String(num)
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('');

  console.log(Number(result));
}

solution(input);
