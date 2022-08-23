const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = input;

function solution(a) {
  a = Number(a);

  // 윤년은 연도가 4의 배수 이거나 100의 배수가 아닐때 또는 400의 배수일때

  if (a % 4 === 0 && (a % 400 === 0 || a % 100 !== 0)) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solution(a);
