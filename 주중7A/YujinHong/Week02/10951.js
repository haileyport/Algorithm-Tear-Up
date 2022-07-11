// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const ab = input[i].split(" ");
  const a = Number(ab[0]);
  const b = Number(ab[1]);

  console.log(a + b);
}
