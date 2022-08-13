// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');
let num = parseInt(input[0]);
let result = '';
for (let i = 1; i <= num; i++) {
  for (let k = 1; k <= num - i; k++) {
    result += ' '
  }
  for (let j = 1; j <= i; j++) {
    result += '*'
  }
  result += '\n';
}
result = result.slice(0, -1);
console.log(result);