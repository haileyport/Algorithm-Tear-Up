// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let nums = input[1].split(' ');

console.log(Math.min(...nums), Math.max(...nums));