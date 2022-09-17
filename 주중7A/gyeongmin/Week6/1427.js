//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n').map(Number);
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = input.toString().split('')
console.log(arr.sort().reverse().join(''))
