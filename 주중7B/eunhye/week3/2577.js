//숫자의 개수

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split("\n").map(Number);

const multiple = String(input[0] * input[1] * input[2]);

let ans = "";

for (j = 0; j < 10; j++) {
  let num = 0;
  for (i = 0; i < multiple.length; i++) {
    const find = multiple[i].includes(j);
    if (find) num++;
  }
  ans += `${num}\n`;
}

console.log(ans);
