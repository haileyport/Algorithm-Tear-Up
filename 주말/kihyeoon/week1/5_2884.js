// 45분 전 시간을 출력하기
// 만약 분이 45보다 크면 분 -45
// 만약 분이 45보다 작으면 분=60-(45-분) & 시간 -1
// 만약 시간=0 -> 23

let input = require("fs").readFileSync("5_2884.txt").toString().split(" ");

let h = +input[0];
let m = +input[1];

if (m < 45) {
  if (h === 0) {
    h = 23;
  } else {
    h = h - 1;
  }
  m = 60 - (45 - m);
} else {
  m = m - 45;
}
console.log(h, m);
