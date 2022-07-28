// 문제: 정수 두개를 받아서 두 수가 점의 위치일때 어느 사분면에 속한지 판단합니다.
// 입력: 첫줄에는 정수 x, 두번째 줄에는 정수 y
// 출력: 점(x,y)의 사분면 번호 1,2,3,4 중 하나를 출력합니다.
// 의사코드
// readlin 모듈을 사용하여 두 수를 배열에 넣어줍니다. (fs 모듈 사용시 런타임에러 발생)
// 조건문 if else 를 사용하여 점(두 수)의 위치가 어느 사분면에 있는지 판단합니다.
// 판단된 사분면의 숫자를 출력합니다.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numbers = [];

rl.on("line", function (line) {
  numbers.push(line);
}).on("close", function () {
  const x = Number(numbers[0]);
  const y = Number(numbers[1]);

  if (x > 0) {
    y > 0 ? console.log(1) : console.log(4);
  }

  if (x < 0) {
    y > 0 ? console.log(2) : console.log(3);
  }
});
