// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim();

function factorial(x) {
  if (x === 0) {
      return 1;
  }
  else {
      return x * factorial(x - 1);
  }
}
console.log(factorial(Number(input)));