// 문제: 두 정수를 비교하는 프로그램 작성
// 입력: 첫째 줄에 A와 B, 공백 한 칸 구분
// 출력: 첫째 줄에 다음 세 가지 중 하나를 출력한다
//      A>B, 출력 '>'
//      A<B, 출력 '<'
//      A=B, 출력 '=='
// 의사코드
// 1. 첫쨰 줄에 주어진 A와 B를 fs모듈을 사용하여 변수 input에 받아줍니다.
// A와 B를 조건문으로 비교하여서 경우에 따라 출력 해줍니다.

const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().split(" ");

if (Number(numbers[0]) > Number(numbers[1])) console.log(">");
if (Number(numbers[0]) < Number(numbers[1])) console.log("<");
if (Number(numbers[0]) === Number(numbers[1])) console.log("==");
