let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let nums = input.map(Number);

console.log(`${Math.max(...nums)}\n${nums.indexOf(Math.max(...nums))+1}`);