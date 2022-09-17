const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const number = +input[0];
const arr = input[1].split(' ').map(Number);

function solution(arr) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (k = 2; k < num; k++) {
      if (num % k === 0) return false;
    }
    return true;
  }

  let count = 0;

  arr.map((num) => {
    if (isPrime(num)) {
      count++;
    }
  });

  console.log(count);
}

solution(arr);
