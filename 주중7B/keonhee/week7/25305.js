const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr1 = input[0].split(' ').map(Number);
const arr2 = input[1].split(' ').map(Number);

function solution(arr1, grade) {
  // 상을 받는 커트라인을 구하라
  // 커트라인이란 상을 받는 사람들 중 가장 낮은 사람의 점수

  // 응시자수 : N, 상을 받는 사람의 수 K, 학생의 점수 x
  const [N, K] = arr1;

  grade.sort((a, b) => b - a);

  console.log(grade[K - 1]);
}

solution(arr1, arr2);
