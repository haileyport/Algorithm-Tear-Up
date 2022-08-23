// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let result = Number(input[0]) * Number(input[1]) * Number(input[2]);
result = String(result);
let counter = Array(10).fill(0);
console.log(result);
for (let i = 0; i < result.length; i++) {
  counter[result[i]]++;
}
for (let i of counter) {
  console.log(i);
}
