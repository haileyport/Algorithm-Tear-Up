const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

function solution(num) {
  // fibonacci 앞 두수의 합

  function fibonacci(num) {
    if (num === 0) {
      return 0;
    }

    if (num === 1) {
      return 1;
    }

    return fibonacci(num - 2) + fibonacci(num - 1);
  }

  console.log(fibonacci(num));
}

solution(input);
