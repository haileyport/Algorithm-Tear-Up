// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다.
// 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

let modArr = [];
let countArr = [];

for (let i = 0; i < input.length; i++) {
  modArr[i] = Number(input[i]) % 42;
}

for (const el of modArr) {
  if (!countArr.includes(el)) {
    countArr.push(el);
  }
}

console.log(countArr.length);
