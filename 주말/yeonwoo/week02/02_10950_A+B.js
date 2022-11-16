// 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하세요
// 입력 : 첫째 줄에 테스트 케이스의 개수 T가 주어집니다.
//       각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어집니다. (0<A, B < 10)
// 출력 : 각 테스트마다 A+B를 출력합니다.
// 의사코드
// 1. 테스트의 갯수와 숫자들을 입력받습니다.
// 2. 두 수의 덧셈을 출력합니다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = ["2", "1 1", "9 8"];

for (let i = 1; i <= Number(input[0]); i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
