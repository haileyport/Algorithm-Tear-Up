// 1~6 눈을 가진 주사위 3개
// 같은 눈 3개면 10,000 + 같은 눈 * 1,000
// 같은 눈 2개면 1,000 + 같은 눈 * 100
// 모두 다른 눈이면 가장 큰 눈 * 100

const input = require("fs").readFileSync("7_2480.txt").toString().split(" ");
const a = +input[0];
const b = +input[1];
const c = +input[2];

if (a === b && a === c && b === c) {
  console.log(10000 + a * 1000);
} else if (a !== b && a !== c && b !== c) {
  console.log(Math.max(a, b, c) * 100);
} else if (a === b || a === c) {
  console.log(1000 + a * 100);
} else if (c === b) {
  console.log(1000 + c * 100);
}
