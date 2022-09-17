let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log((BigInt(input[0]) + BigInt(input[1])).toString())
