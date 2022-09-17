const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const a = new Set(input[1].split(" "));
const b = new Set(input[2].split(" "));

let count = 0;

for (const el of a) {
  if (!b.has(el)) count++;
}

for (const el of b) {
  if (!a.has(el)) count++;
}

console.log(count);
