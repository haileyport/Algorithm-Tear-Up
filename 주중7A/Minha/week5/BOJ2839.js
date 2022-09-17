// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim();

let result = -1;
let c = Math.floor(input / 5);

while (c >= 0) {
  let remain = input - 5 * c;
  if (remain % 3 === 0) {
    result = remain / 3 + c;
    break;
  } else c -= 1;
}
console.log(result);