// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

input = parseInt(input[0]);
let result = '';
for (let i = 1; i <= input; i++) {
  result += i + '\n';
}
console.log(result);

