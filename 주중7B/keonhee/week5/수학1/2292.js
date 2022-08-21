const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

function solution(num) {
  // 숫자 1 기준
  // 첫번째 주위 숫자 ( 2 ~ 7 ) 6개 1번만 움직여도 도달 가능
  // 두번째 주위 숫자 ( 8 ~ 19 ) 12개 2번
  // 세번째 주위 숫자 ( 20 ~ 37 ) 18개 3번
  // 네번째 주위 숫자 ( 38 ~ 61 )  24개 4번
  // 규칙 : 벌집의 개수는 6개씩 늘어난다.
  // 숫자는 마지막 숫자에서 늘어난 개수 -1 개씩 늘어남

  // default count = 1

  let range = 1;
  let startPoint = 1;

  while (startPoint < num) {
    // 6의 배수를 곱해준다.
    startPoint += 6 * range;

    // 범위를 늘려준다.
    range++;
  }

  console.log(range);
}

solution(input);
