//숫자 카드 2

const fs = require("fs");
const input = fs
  .readFileSync("text.txt")
  .toString()
  .split("\n")
  .map((el) => el.trim());

const N = parseInt(input[0]);
const sangun = input[1].split(" ").map(Number);
const M = input[2];
const num = input[3].split(" ").map(Number);

const ans = new Map();

sangun.forEach((el) => {
  if (ans.has(el)) {
    ans.set(el, ans.get(el) + 1);
  } else {
    ans.set(el, 1);
  }
});

const list = [];
num.forEach((el) => list.push(ans.get(el) || 0));
console.log(list.join(" "));
