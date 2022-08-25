// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')[0];
let num = Number(input);
for (let i = 2; i <= num; i++) {
  while(num % i === 0) {
    console.log(i);
    num /= i;
  }
}