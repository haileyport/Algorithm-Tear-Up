// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const t = Number(input.shift());
input = input.map(i => i.trim().split(' '));
let count = 0, result = '';
// 현재 i번째 사람과 다른사람들 비교하기
for (let i = 0; i < t; i++) {
  count = 0;
  // i와 비교하는 다른 사람들
  for (let j = 0; j < t; j++) {
    // 숫자로 변환
    input[j][0] = Number(input[j][0]);
    input[j][1] = Number(input[j][1]);
    if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) count++;
  }
  result += `${count + 1} `;

}
console.log(result.trim());