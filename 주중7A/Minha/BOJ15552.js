// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');
let result = '';
count = parseInt(input[0]);
for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  result += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(result);