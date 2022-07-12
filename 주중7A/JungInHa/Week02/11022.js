// 두 정수 A와 B를 입력받은 다음, A+B를 출력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. 
// x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

let T = parseInt(input[0]);
let result = '';

for (let x = 1; x <= T; x++) {
  let aAndB = input[x].split(" ");
  let A = parseInt(aAndB[0]);
  let B = parseInt(aAndB[1]);
  result += `Case #${x}: ${A} + ${B} = ${A + B} \n`;
}

console.log(result);