const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];

function solution(num) {
  // 0 보다 크러간 같고 99 보다 작거나 같은 정수
  // 주어잔 수가 10 보다 작다면 00 을 붙여 두자리수로 만들고
  // 각자리의 수를 더한다.
  // 주어진 수가 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수
  // 26 => 2 + 6 = 8 , 68 => 6 + 8 = 14 , 84 => 8 + 4 = 12 , 12 => 42 => 4 + 2 = 6 26
  // 사이클의 길이를 구하라.

  if (num < 0 || num > 100) {
    return;
  }
  let initialNumber = num;

  let count = 0;

  while (true) {
    // 수를 분리해 준 후 숫자형으로 변환
    let splited = num.split('').map((num) => Number(num));

    // 분리된 숫자형의 합
    let sum = splited.reduce((a, b) => a + b);

    // sum을 분리해서 마지막 인덱스를 구한다.
    let splitedSum = String(sum)
      .split('')
      .map((num) => Number(num));

    // sum의 마지막 인덱스
    let lastIndexOfSplitedSum = splitedSum[splitedSum.length - 1];

    // 오른쪽 숫자(3 자리 이상의 수를 고려해서 마지막 인덱스로 접근)와 결과값 더해서 숫자형으로 변환
    let newNum = Number(String(splited[splited.length - 1]) + String(lastIndexOfSplitedSum));

    // num을 재할당 시켜준다.

    num = String(newNum);

    count += 1;

    // newNum 이 초기 number와 일치하면 while문 탈출 하고 cycle 수인 count 수 출력
    if (String(newNum) === initialNumber) {
      console.log(count);
      break;
    }
  }
}

solution(input);
