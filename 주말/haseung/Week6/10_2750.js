const inputs = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((n) => Number(n));

const num = inputs.shift();
const sorted = inputs.sort((a, b) => a - b);

for (let i = 0; i < num; i++) {
  console.log(sorted[i]);
}
