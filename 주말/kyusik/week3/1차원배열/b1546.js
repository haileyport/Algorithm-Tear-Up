const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
const score = input[1].split(' '); // 공백을 기준으로 문자열을 나눠서 배열에 넣음.
//console.log(score);
const maxScore = Math.max(...score); // 배열에서 가장 큰 숫자 찾음
const manipulScoreArr = [];
for (let i = 0; i < n; i++) {
    manipulScoreArr[i] = parseFloat(parseInt(score[i]) / maxScore) * 100 // 문제의 조건대로 배열의 모든 점수를 조작함
}
const totalScore = manipulScoreArr.reduce((prev, curr) => prev + curr, 0); // 조작한 점수들을 모두 더함
console.log(parseFloat(totalScore / n)); // 조작한 점수들의 평균을 구해서 출력