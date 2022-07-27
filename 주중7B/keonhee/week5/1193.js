const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

function solution(num) {
  // 나열된 분수들을 지그재그 순서로 차례대로 번호를 메긴다.
  // 1번 : 1/1 , 2번 : 1/2 , 3번 : 2/1, 4번 : 3/1, 5번 ㅌ 2/2, 6번 : 1/3
  // 색칠해 나가는 것 처럼.
  // [1,2,4,7,11,16] 숫자만큼 늘어남 [1,2,3,4,5] 늘어남
  // [3,5,8,12,17] [2,3,4,5,6] 늘어남
  // [6,9,13,18,] [3,4,5,6,7] 늘어남
  // 표를 뒤집는다.

  let table = [];

  for (let i = 1; i <= 100; i++) {
    table.push(`${1}/${i}`);
  }

  console.log(table);
}

solution(input);
