// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
let a = input[0].split('').reverse().join(''), b = input[1].split('').reverse().join('');
Number(a) > Number(b) ? console.log(a) : console.log(b);

