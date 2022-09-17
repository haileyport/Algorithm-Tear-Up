// 문제 : N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하세요. 출력은 형식에 맞춰서 합니다.
// 입력 : 첫째 줄에 N이 주어집니다. (1<= N <= 9)
// 출력 : 출력 형식과 같게 N*1부터 N*9까지 출력합니다.
// 출력 형식 : 2 * 1 = 2
//           2 * 2 = 4
//           2 * 3 = 6
//           2 * 4 = 8
//           2 * 5 = 10
//           2 * 6 = 12
//           2 * 7 = 14
//           2 * 8 = 16
//           2 * 9 = 18

const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin"));

//const input = 5;

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
