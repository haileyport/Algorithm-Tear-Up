const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, num] = input;

function solution(N, num) {
  // String 타입으로 으로 변환후 split 으로 배열화 시킨다.
  // 배열 내부 요소들 Number 타입으로 변환
  num = String(num).split('').map(Number);

  // Reduce 함수 이용해서 내부 요소들 모두 더해준다.
  console.log(num.reduce((a, b) => a + b));
}

solution(N, num);
