오븐시계;
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const input1 = input[0].split(' ').map((num) => Number(num));
const input2 = Number(input[1]);
function solution(a, b) {
  // 오븐 구이가 끝나는 시간을 분 단위로 자동적 계산
  // 입력값 1 은 현재 시각, 입력값 2 는 요리하는데 필요한 시간
  // 최종 시간을 구한다.
  // 몫 나머지
  let [hour, minute] = a;
  let sum = minute + b;
  let remainder = Math.floor(sum % 60); // 나머지가 분
  let quotient = Math.floor(sum / 60); // 몫 이 시간
  if (sum >= 60) {
    sum = remainder;
    // 나머지가 분이 된다.
    hour = hour + quotient;
  }
  if (hour >= 24) {
    hour -= 24;
  }
  console.log(`zz`, 145 % 22);
  console.log(hour, sum);
}

solution(input1, input2);
