const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log((BigInt(input[0]) + BigInt(input[1])).toString())