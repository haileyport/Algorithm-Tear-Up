// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim();

const num = Number(input);

let result = "";

for (let i = num; i >= 1; i--) {
  result = result + i + "\n";
}

console.log(result);
