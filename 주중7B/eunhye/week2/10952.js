//A+B - 5

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");
//위 코드에서 trim이 없으면 백준에서 에러 발생

let ans = "";

for (i = 0; i < input.length - 1; i++) {
  const num = input[i].split(" ").map(Number);
  ans += `${num[0] + num[1]}\n`;
}

console.log(ans);
