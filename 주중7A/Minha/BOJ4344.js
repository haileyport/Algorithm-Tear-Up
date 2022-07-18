// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let c = Number(input[0]);

for (let i = 1; i <= c; i++) { // 테스트 케이스 만큼 반복

  let student = input[i];
  student = student.split(' ');
  const studentNum = student[0];
  student.shift();

  // 현재 반의 평균 계산
  let avg = student.reduce(function add(sum, currValue) {
    return Number(sum) + Number(currValue);
  }, 0);
  avg /= studentNum;

  // 평균이 넘는 학생 수 count
  let overAvg = student.reduce(function compare(overAvg, currValue) {
    if (currValue > avg) overAvg += 1
    return overAvg;
  }, 0);

  console.log((overAvg / studentNum * 100).toFixed(3) + "%");

}
