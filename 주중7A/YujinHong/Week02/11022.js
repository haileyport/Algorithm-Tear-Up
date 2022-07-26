// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim().split("\n");

let num = [];
let a = 0;
let b = 0;
let result = "";

for (let i = 1; i <= input[0]; i++) {
  num = input[i].split(" ");
  a = Number(num[0]);
  b = Number(num[1]);

  result += `Case #${i}: ${a} + ${b} = ${a + b}\n`;
}

console.log(result);
