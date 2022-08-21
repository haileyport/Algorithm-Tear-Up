//숫자 카드 - 실버 5
const fs = require("fs");
const input = fs.readFileSync("text.txt").toString().trim().split("\n");
const sangun = new Set(input[1].split(" "));
let demo = input[3].split(" ");

let result = [];
for (target of demo) {
  //for of를 사용하면 of의 value를 가져올 수 있음
  sangun.has(target) ? result.push(1) : result.push(0);
}

console.log(result.join(" "));
