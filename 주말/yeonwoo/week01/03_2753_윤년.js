// 문제: 연도가 주어졌을 떄, 윤년이면 1 아니면 0 출력하는 프로그램 작성
//      윤년은 연도가 1)4의 배수이면서 && 2)(100의 배수가 아닐떄 || 400의 배수 일떄)
// 입력: 첫쨰 줄에 연도가 주어진다. (1<=자연수<4000)
// 출력: 윤년이면 1 아니면 0
// 의사코드
// fs모듈을 사용하여 년도를 입력받습니다.
// 입력 받은 년도가 조건문을 활용하여 윤년인지 아닌지 판단합니다.
// 윤년이면 1 아니면 0을 출력합니다.

const fs = require("fs");
const year = fs.readFileSync("/dev/stdin").toString();

if (
  Number(year) % 4 === 0 &&
  (Number(year) % 100 !== 0 || Number(year) % 400 === 0)
) {
  console.log(1);
} else {
  console.log(0);
}
