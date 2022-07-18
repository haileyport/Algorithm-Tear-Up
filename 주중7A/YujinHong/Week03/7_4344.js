// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  const classArr = input[i].split(" ");
  const scoreArr = classArr.slice(1);

  let sum = 0;
  let avg = 0;

  let count = 0;

  for (let el of scoreArr) {
    sum += Number(el);
  }

  avg = sum / classArr[0];

  for (let el of scoreArr) {
    if (Number(el) > avg) {
      count++;
    }
  }

  console.log(((count / classArr[0]) * 100).toFixed(3) + "%");
}
