// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().split('\n');
let i = 0;

while (input[i] !== '0 0') {
  let num = input[i].split(' ');
  console.log(Number(num[0]) + Number(num[1]));
  i++;
}
