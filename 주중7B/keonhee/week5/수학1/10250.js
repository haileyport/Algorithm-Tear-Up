const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input);

const T = +input[0];

const W = input[1].split(' ').map(Number);

const H = input[2].split(' ').map(Number);

function solution(T, W, H) {
  // 정문으로 부터 걷는 거리가 가장 짧도록 방을 배정
  // W 개 방이 있는 H 층 건물
  // 엘리베이터는 가장 왼쪽에 있음
  //
}

solution(T, W, H);
