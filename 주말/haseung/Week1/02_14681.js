// 예제 입력 1
// 12
// 5
// 예제 출력 1
// 1

const inputs = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const a = parseInt(inputs[0], 10);
const b = parseInt(inputs[1], 10);

if (a > 0 && b > 0) {
  //1사분면은 두 수 모두 양수
  console.log("1");
} else if (a < 0 && b > 0) {
  //2사분면은 a는 양수, b는 음수
  console.log("2");
} else if (a < 0 && b < 0) {
  //3사분면은 두 수 모두 음수
  console.log("3");
} else {
  //4사분면은 a는 음수, b는 양수
  console.log("4");
}
