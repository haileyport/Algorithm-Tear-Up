const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let [a, b] = input;

function solution(a, b) {
  a = Number(a);

  b = Number(b);

  if (a > b) {
    console.log('>');
  } else if (a < b) {
    console.log('<');
  } else if (a === b) {
    console.log('==');
  }
}

solution(a, b);
