const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map(Number);

function solution(nums) {
  // 첫째줄에는 산술평균
  // 두번째는 중앙값
  // 세번째는 최빈값 여러개있을때는 최빈값중 두번째로 작은값
  // 넷재줄에는 범위
  console.log(nums);

  const copy = nums.slice();

  const sorted = nums.slice().sort((a, b) => a - b);

  const average = Math.floor(copy.reduce((a, b) => a + b) / copy.length);
  const inTheMiddle = copy.sort((a, b) => a - b)[Math.floor(copy.length / 2) - 1];
  const rangeDiffernece = sorted[sorted.length - 1] - sorted[0];

  console.log(average, inTheMiddle, rangeDiffernece);
}

solution(input);
