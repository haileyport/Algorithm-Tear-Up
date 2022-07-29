// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim();
const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for (let i = 0; i < croatian.length; i++) {
  input = input.replaceAll(croatian[i], 'C');
}

console.log(input.length);