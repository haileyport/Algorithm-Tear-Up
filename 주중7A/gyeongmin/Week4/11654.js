let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().split('\n');
//console.log(input) //['A']

console.log(input[0].charCodeAt());
