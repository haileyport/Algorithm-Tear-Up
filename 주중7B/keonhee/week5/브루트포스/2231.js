const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

function solution(num) {
  // 자연수 N 이 있을때, 그 자연수 N 의 분해합은 N 과 N 을 이루는 각 자리수의 합
  // 어떤 자연수 M 의 분해합이 N 일때, M 을 N 의 생성자라 함.
  // 245의 분해합 = (245 + 2 + 4 + 5) = 256
  // 245는 256의 생성자 // 생성자가 없는 자연수도 있다. // 여러개인 경우도 있다.
  // 가장 작은 생성자를 구하라. // 없는 경우는 0 출력
  // ex) 216 + 2 + 1 + 6 = 225

  // 왜 실패 ?

  for (let i = 1; i <= num; i++) {
    // 기존 숫자를 담은 배열
    let numArr = [i];
    // 기존숫자 분해된 배열
    let splittedNum = String(i).split('').map(Number);
    // 두 배열을 concatinating 해서 합칠 배열을 만들어준다
    numArr = numArr.concat(splittedNum);
    // reduce 함수 이용해서 비교 , 가장 먼저 나온 숫자 ( 최솟값 ) 출력
    if (numArr.reduce((a, b) => a + b) === num) {
      console.log(numArr[0]);
      break;
    }
  }
}

solution(input);
