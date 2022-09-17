let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./07_4344.txt').toString().trim().split('\n');

for (let i = 1; i < input.length; i++){
  let rowSelector = input[i].split(' '); // 각 열을 추출
  let studentNubmer = rowSelector[0]; // 각 열의 학생 수 추출
  let studentScores = rowSelector.slice(1); // 학생들의 점수를 배열로 추출
  let studentTotalScores = studentScores.reduce((a, b) => Number(a) + Number(b), 0); // 학생들 성적의 총합
  let average = (studentTotalScores / studentNubmer); // 학생들의 평균
  let aboveAverage = studentScores.filter(el => el > average)// 학생들 중에 평균 이상인 애들 구하기
  let fitPercentage = (aboveAverage.length / studentNubmer * 100).toFixed(3)

  console.log(`${fitPercentage}%`);
}
