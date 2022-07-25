//주사위 세개

const fs = require("fs");
const input = fs
  .readFileSync("./../text.txt")
  .toString()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

if (a === b && a === c) {
  console.log(10000 + a * 1000);
} else if (a !== b && b !== c && a !== c) {
  console.log(Math.max(a, b, c) * 100);
} else {
  if (a == b || a == c) {
    console.log(1000 + a * 100);
  } else if (b == c) {
    console.log(1000 + b * 100);
  }
}
