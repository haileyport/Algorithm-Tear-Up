// 첫 줄에 테스트케이스의 개수 T가 주어진다.
// T는 최대 1,000,000이다.
// 다음 T줄에는 각각 두 정수 A와 B가 주어진다. 
// A와 B는 1 이상, 1,000 이하이다.
// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

let T = parseInt(input[0]);
let result = '';

for(let i = 1; i <= T; i++) {
  let aAndB = input[i].split(" ");
  let A = parseInt(aAndB[0]);
  let B = parseInt(aAndB[1]);
  result = result + (A + B) + '\n';
}

console.log(result);