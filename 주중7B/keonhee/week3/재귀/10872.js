const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

function solution(num) {
  // factorial  4! =  4 * 3 * 2 * 1 = 4* 3!

  function factorial(num) {
    if (num === 0) {
      return 1;
    }

    return num * factorial(num - 1);
  }

  console.log(factorial(num));
}

solution(input);
