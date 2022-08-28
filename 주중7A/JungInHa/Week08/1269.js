const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const A = new Set(input[1].split(' '));
const B = new Set(input[2].split(' '));

let a_B = 0;
A.forEach(num => {
  if (!(B.has(num))) a_B++;
})

let b_A = 0;
B.forEach(num => {
  if (!(A.has(num))) b_A++;
})

console.log(a_B + b_A);