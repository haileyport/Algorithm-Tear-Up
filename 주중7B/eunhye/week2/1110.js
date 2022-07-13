//더하기 사이클
/* 짧은 코드 */

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString();
let num = Number(input);
let route = 0;
let sum;

while (true) {
  route++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  if (num === Number(input)) {
    break;
  }
}

console.log(route);

/* 첫 코드 */

//1. 주어진 수가 10보다 작은 경우 앞에 0 붙이기
//2. 수를 한 자리씩 분리해서 ten, one의 변수로 저장
//3. ten+one = sum
//4. one 과 sum[sum.length-1]을 string으로 붙인다.
//5. 2~5를 반복하되, 주어진 수 === 4의 string이 되면 멈춘다.
//6. 멈추었을 때 반복문의 반복 횟수를 구해 리턴한다.

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();
// let num = Number(input);
// let ans = { number: `${input}`, route: 0 };

// if (num === 0) {
//   console.log(1);
//   return;
// }

// if (num < 10) {
//   ans.number = 0 + input;
// }

// let ten = Number(ans.number[0]);
// let one = Number(ans.number[1]);

// while (Number(ans.number) !== num || ans.route === 0) {
//   ans.route++;
//   let sum = String(ten + one);
//   ans.number = `${one}${sum[sum.length - 1]}`;
//   ten = Number(ans.number[0]);
//   one = Number(ans.number[1]);
//   if (Number(ans.number) === num) {
//     break;
//   }
// }

// console.log(ans.route);
