const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

function solution(A, B) {
  console.log((A + B).toString());
}

solution(A, B);
