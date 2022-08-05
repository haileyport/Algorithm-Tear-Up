// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
input[0].length == 0 ? console.log(0) : console.log(input.length);