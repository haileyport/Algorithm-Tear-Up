// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
const a = Number(input[0]), b = Number(input[1]), c = Number(input[2]);
let counter = 1, margin = c-b;
counter = (margin<=0) ? -1 : Math.floor(a/margin) + 1;
console.log(counter);