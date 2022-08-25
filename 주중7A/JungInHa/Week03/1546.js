// 세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
// 첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 
// 둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.
// 첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let N = parseInt(input[0]);
let scores = input[1].split(' ');
let maxScore = Math.max(...scores);
let sum = 0;

for (let i = 0; i < N; i++) {
  let score = parseInt(scores[i]);
  scores[i] = ((score / maxScore) * 100).toFixed(2);
}

for (let j = 0; j < N; j++) {
  sum += Number(scores[j]);
}

console.log((sum/N).toFixed(2));