// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let max = Number(input[0]), flag = 0;
for (let i = 0; i < input.length; i++) {
  if (Number(input[i]) > max) {
    max = input[i];
    flag = i;
  }
}
console.log(max);
console.log(flag + 1);

