// 두 정수 A와 B를 입력받은 다음, A+B를 출력
// 입력의 첫째 줄에는 테스트 케이스의 개수 T가 주어지고, 
// 다음 줄부터 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

let T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  // input[i][0] + input[i][1];
  let aAndB = input[i].split(" ");
  let A = parseInt(aAndB[0]);
  let B = parseInt(aAndB[1]);
  console.log(A + B);
}

