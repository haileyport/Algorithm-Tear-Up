// 상근이는 세 자리 수 두 개를 칠판에 써주었다.
// 그 다음에 크기가 큰 수를 말해보라고 했다.
// 상수는 수를 다른 사람과 다르게 거꾸로 읽는다.
// 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split(" ");

const num1 = input[0].split("").reverse().join("");
const num2 = input[1].split("").reverse().join("");

console.log(Math.max(num1, num2));
