const [n, ...input] = require("fs")
  .readFileSync("8_11022.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;
input.map((arr) => {
  let [a, b] = arr.split(" ").map(Number);
  i++;
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
});
