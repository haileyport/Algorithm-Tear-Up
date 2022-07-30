const input = require("fs")
  .readFileSync("5_1546.txt")
  .toString()
  .trim()
  .split("\n");

// 최댓값 구하기
// 모든 점수를 점수/m*100으로 바꾼 배열 만들기
// 모든 점수의 평균 구하기

const scores = input[1].split(" ").map(Number);

const maxScore = Math.max(...scores);

const newArr = scores.map((el) => (el / maxScore) * 100);

const average = newArr.reduce((acc, cur) => acc + cur, 0) / newArr.length;

console.log(average);
