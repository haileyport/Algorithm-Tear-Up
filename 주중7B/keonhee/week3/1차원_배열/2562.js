const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let array = input.map(Number);

function solution(array) {
  // 9 개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댃값이 몇번째 수 인지 작성
  // 서로 다른 9 개의 자연수

  let max = Math.max(...array);

  let index = array.indexOf(max) + 1;

  console.log(max, index);
}

solution(array);
