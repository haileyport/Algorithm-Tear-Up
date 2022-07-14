const [n, ...input] = require("fs")
  .readFileSync("2_10950.txt")
  .toString()
  .trim()
  .split("\n");

input.map((arr) => {
  let [a, b] = arr.split(" ").map(Number);
  console.log(a + b);
});
