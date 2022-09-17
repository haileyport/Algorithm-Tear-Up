// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');

count = parseInt(input[0]);
let sum = 0;
for (let i = 1; i <= count; i++) {
  sum += i;
}

console.log(sum);