// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.
// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let C = parseInt(input[0]);

for (let i = 1; i <= C; i++) {
  let scores = input[i].split(' ');
  let students = parseInt(scores[0]);

  let average = 0;
  let goodScore = 0;

  // 평균 구하기
  for (let j = 1; j <= students; j++) {
    average += parseInt(scores[j]);
  }
  average = average / students;

  // 평균 이상인 학생들의 수 구하기 
  for (let g = 1; g <= students; g++) {
    let score = parseInt(scores[g]);
    if (score > average) {
      goodScore++;
    } 
  }

  // 평균 이상인 학생들의 비율 구하기
  let ratio = ((goodScore/students)*100).toFixed(3);
  console.log(ratio+'%');
} 
