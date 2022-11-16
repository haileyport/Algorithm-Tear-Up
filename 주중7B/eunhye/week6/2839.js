//설탕배달
//3으로 먼저 나눠야 하는 경우에서 어려움을 겪었고, 스터디에서 해결함

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = Number(input);
let five = 0;
let three = 0;

while (true) {
  if (num % 5 === 0) {
    five = num / 5;
    console.log(five + three);
    break;
  }
  if (num < 0) {
    console.log(-1);
    break;
  }
  num = num - 3;
  three++;
}
