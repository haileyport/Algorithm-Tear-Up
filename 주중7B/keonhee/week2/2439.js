const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

function solution(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    // ' ' num - i 만큼만 반복
    result += `${' '.repeat(num - i)}${'*'.repeat(i)} ${'\n'}`;
  }
  console.log(result);
}

solution(input);
