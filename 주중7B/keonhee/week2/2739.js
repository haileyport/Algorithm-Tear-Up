const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = Number(input[0]);

function solution(num) {
  for (let i = 1; i <= 9; i++) {
    // 1단 부터 9단까지 num 을 곱해준다.
    let result = i * num;
    console.log(`${num} * ${i} = ${result}`);
  }
}

solution(input);
