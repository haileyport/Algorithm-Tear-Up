// 바로 "45분 일찍 알람 설정하기"이다.
// 이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.
// 현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim().split(" ");

let h = parseInt(input[0]);
let m = parseInt(input[1]);

if (h === 0 && m < 45) {
  h = 24 * 60;
} else {
  h = h * 60;
}

m = m + h - 45;

let calH = Math.floor(m / 60);
let calM = m % 60;

console.log(`${calH} ${calM}`);
