const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num1 = +input[0];
const num2 = +input[1];

function solution(min, max) {}

solution(num1, num2);
