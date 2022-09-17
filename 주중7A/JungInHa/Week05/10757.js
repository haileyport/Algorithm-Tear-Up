const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

let result = String(A + B)
console.log(result)