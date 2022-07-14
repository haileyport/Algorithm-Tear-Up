// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 입력: 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 출력: 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다. (우측정렬 형태로)

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");

let N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  let result = '';
    
  for (let s = N - i; s > 0; s--) {
    result += ' ';
  }
  for (let j = 1; j <= i; j++) {
    result += '*';
  }
    
  console.log(result);
}




