// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

for (let i = 0; i < testCase; i++) {
  let cur = 2 * i + 1;
  let k = Number(input[cur]), n = Number(input[cur + 1]);

  let result = 1;
  // multiply k+(n-j)
  for (let j = 0; j < n - 1; j++) result *= (k + n - j);
  // divide into n!
  for (let j = 1; j < n; j++) result /= j;

  console.log(Math.abs(result));
}