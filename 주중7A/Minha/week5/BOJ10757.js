// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
const a = BigInt(input[0]), b = BigInt(input[1]);
let result = (a + b).toString();
console.log(result);