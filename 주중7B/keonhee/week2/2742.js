const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = Number(input[0]);

function solution(num) {
  let result = '';
  for (let i = num; i >= 1; i--) {
    result += `${String(i)} ${'\n'}`;
  }

  console.log(result);
}

solution(input);
