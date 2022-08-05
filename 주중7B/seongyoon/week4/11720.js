let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let nums = input[1].split('').map(Number);

console.log(nums.reduce((a,b)=>a+b));