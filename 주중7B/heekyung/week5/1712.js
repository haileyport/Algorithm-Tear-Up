const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

//고정비용 A
//재료 인건비 B > n대 늘때마다 *n
//노트북 가격 => C
// C*n > A+(B*n) => 이 때가 손익분기점

// const A = input[0];
// const B = input[1];
// const C = input[2];
// let n = -1;

// if (input[1] > input[2]) {
//   n = -1;
// } else {
//   while (C * n < A + B * n) {
//     n++;
//   }
//   n++;
// }

// console.log(n);
//틀렸습니다.

//A / (C - B) = n
const A = input[0];
const B = input[1];
const C = input[2];
let n = 0;

if (B > C) {
  n = -1;
} else {
  n = Math.floor(A / (C - B));
  n++;
}

console.log(n);
