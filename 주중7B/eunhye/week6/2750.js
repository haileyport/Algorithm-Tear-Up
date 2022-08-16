//수 정렬하기

const fs = require("fs");
const raw = fs.readFileSync("text.txt", "utf8");
const input = raw.trim().split("\n").map(Number);
input.shift();
const set = new Set(input);
const arr = [...set].sort((a, b) => a - b);

arr.map((el) => {
  console.log(el);
});
