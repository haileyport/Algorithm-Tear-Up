// 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim().split("\n");

const time = input[0].split(" ");

let hour = Number(time[0]);
let min = Number(time[1]);
let cookTime = Number(input[1]);

hour = hour * 60;
min = min + hour + cookTime;

let calHour = Math.floor(min / 60);
let calMin = min % 60;

if (calHour > 23) {
  calHour = calHour - 24;
}

console.log(`${calHour} ${calMin}`);
