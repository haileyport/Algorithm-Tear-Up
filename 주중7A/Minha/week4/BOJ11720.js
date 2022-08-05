// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
testcase = input[0];
input[1] = input[1].split('');
const nums = input[1].map(Number);
let sum = 0;
for (let i = 0; i < testcase; i++) {
  sum += nums[i];
}
console.log(sum);


