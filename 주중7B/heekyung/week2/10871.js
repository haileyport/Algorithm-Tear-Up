const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const number = input[0].split(' ').map(Number);
const arr = input[1].split(' ');

const arr2 = arr.filter((a) => a < number[1])
console.log(...arr2)