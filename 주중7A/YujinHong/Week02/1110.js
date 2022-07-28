// 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
// 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다.
// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.

const fs = require("fs");
let input = fs.readFileSync("../예제.txt").toString().trim();

if (input < 10) {
  input = "0" + input;
}

let a = input.slice(0, 1);
let b = input.slice(-1);

let sumNum = Number(a) + Number(b);
let newNum = b + String(sumNum).slice(-1);

let count = 1;

while (1) {
  if (input === "00") {
    console.log(count);
    break;
  }

  count++;

  a = newNum.slice(0, 1);
  b = newNum.slice(-1);

  sumNum = Number(a) + Number(b);
  newNum = b + String(sumNum).slice(-1);

  if (newNum === input) {
    console.log(count);
    break;
  }
}
