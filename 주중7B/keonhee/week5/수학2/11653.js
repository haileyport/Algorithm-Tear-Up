const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input[0];

function solution(num) {
  const result = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      num = num / i;
      result.push(i);
    }
  }

  result.map((num) => console.log(num));
}

solution(num);
