// 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다.
// 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
// 세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n");

const scoreArr = input[1].split(" ");
const newArr = [];

let maxScore = scoreArr[0];
let sum = 0;

for (const el of scoreArr) {
  if (Number(el) > maxScore) {
    maxScore = el;
  }
}

for (const el of scoreArr) {
  newArr.push((el / maxScore) * 100);
}

for (const el of newArr) {
  sum += el;
}

console.log(sum / input[0]);
