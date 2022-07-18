// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let result = [input[0] % 42];
for (let i = 1; i < 10; i++) {
  let curr = input[i] % 42;
  if (!result.includes(curr)) result.push(curr);
}
console.log(result.length);