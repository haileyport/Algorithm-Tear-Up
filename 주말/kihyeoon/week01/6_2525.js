// 현재 시각에 추가 시간(분) 더해서 출력하기
// 분단위 추가 시간을 몇시간 몇분인지 나누기
// 추가 분을 현재 시각(분)에 더함
// 만약 합계가 59를 넘으면 시간+1을 하고 추가 분에서 60을 빼고 현재 분에 더해줌
// 추가 시간을 24로 나눈 나머지 값을 현재 시각(시간)에 더함
// 만약 시간이 23을 넘으면 -> 추가시간-(24-현재시간)

const input = require("fs").readFileSync("6_2525.txt").toString().split("\n");
const time = input[0].split(" ");

const hour = +time[0];
const min = +time[1];
const addTime = +input[1];

const addHour = Math.floor((addTime / 60) % 24);
const addMin = addTime % 60;

let newMin = 0;
let newHour = 0;
newMin = min + addMin;
newHour = hour + addHour;
if (newMin > 59) {
  newHour++;
  newMin = newMin - 60;
}
if (newHour > 23) {
  newHour = newHour - 24;
}
console.log(newHour, newMin);
