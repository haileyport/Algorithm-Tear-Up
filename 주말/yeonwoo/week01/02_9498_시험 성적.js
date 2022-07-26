// 문제: 시험 점수를 입력받아서
//      90 ~ 100 : A
//      80 ~ 89  : B
//      70 ~ 79  : C
//      60 ~ 69  : D
//      나머지     : F
// 입력: 첫째 줄에 시험 점수가 주어진다 (0<=정수<=100)
// 출력: 시험 성적
// 의사코드
// 1. fs 모듈을 사용해서 입력값을 변수에 저장해줍니다.
// 2. if~else if 문을 사용해서 조건에 대해 탐색해 준뒤 알맞은 성적을 출력해줍니다.

const fs = require("fs");
const score = fs.readFileSync("/dev/stdin").toString();

if (Number(score) >= 90) {
  console.log("A");
} else if (Number(score) >= 80) {
  console.log("B");
} else if (Number(score) >= 70) {
  console.log("C");
} else if (Number(score) >= 60) {
  console.log("D");
} else {
  console.log("F");
}
