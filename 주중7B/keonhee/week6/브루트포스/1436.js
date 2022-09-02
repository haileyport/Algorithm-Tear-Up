const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const number = +input[0];

function solution(num) {
  let defaultNum = 665;

  const targetNumber = '666';

  // num 이 1 까지 다음 666이 포함되는 숫자 찾기?
  while (num > 0) {
    defaultNum++;

    // 찾으면 입력값 하나 줄이기
    String(defaultNum).includes(targetNumber) ? num-- : '';
  }

  console.log(defaultNum);
}

solution(number);
