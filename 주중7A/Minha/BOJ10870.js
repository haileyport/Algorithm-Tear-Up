// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim();

function fibo(x) {
  if (x < 2) {
      return x;
  }
  else {
      return fibo(x - 1) + fibo(x - 2);
  }
}
console.log(fibo(Number(input)));