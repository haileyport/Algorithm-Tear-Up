const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num1 = +input[0];
const num2 = +input[1];

function solution(min, max) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (k = 2; k < num; k++) {
      if (num % k === 0) return false;
    }
    return true;
  }

  const arr = [];

  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }

  console.log(arr.reduce((a, b) => a + b));

  console.log(arr[0]);
}

solution(num1, num2);
