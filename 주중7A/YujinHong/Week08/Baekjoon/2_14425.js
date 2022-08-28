const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const nm = input[0].split(" ").map(Number);
const n = nm[0];
// const m = nm[1];

const setArr = new Set(input.slice(1, n + 1));
const myArr = input.slice(n + 1);

let count = 0;
for (const el of myArr) {
  if (setArr.has(el)) count++;
}

console.log(count);
