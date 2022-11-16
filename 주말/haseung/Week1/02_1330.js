//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

const fs = require("fs");
const inputs = fs.readFileSync(0, "utf-8").toString().split(" ");

const a = Number(inputs[0]);
const b = Number(inputs[1]);

if (a === b) {
  console.log("==");
} else if (a > b) {
  console.log(">");
} else {
  console.log("<");
}
