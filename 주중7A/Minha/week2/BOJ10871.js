// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');
let num = input[0].split(' ');
let a = input[1].split(' ');

let result = '';
let threshold = parseInt(num[1]);

for (let i = 0; i < parseInt(num[0]); i++) {
  if (a[i] < threshold) result += (a[i] + ' ');
}

console.log(result);
