let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let nums = input[1].split(' ').map(Number);

console.log(`${Math.min(...nums)} ${Math.max(...nums)}`);