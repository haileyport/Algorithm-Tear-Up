//문자열 집합

const fs = require("fs");
const input = fs
  .readFileSync("text.txt")
  .toString()
  .split("\n")
  .map((el) => el.trim());

let info = input.shift();
info = info.split(" ");

//집합 문제는 시간 때문에 map, set을 중심으로 고려해야 함
let ans = 0;
const group = new Set(input.slice(0, info[0]));
const M = input.slice(info[0]);

M.forEach((el) => {
  if (group.has(el)) {
    ans++;
  }
});

console.log(ans);
