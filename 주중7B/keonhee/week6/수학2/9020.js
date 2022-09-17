const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const number = +input[0];
const arr = input.slice(1).map(Number);

function solution(num, arr) {}

solution(number, arr);
