// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');

input = parseInt(input[0]);
let result = '';
for (let i = input; i > 0; i--) {
  result += i + '\n';
}
console.log(result);
