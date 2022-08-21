const [n, input] = require("fs")
  .readFileSync("02_11720.txt")
  .toString()
  .trim()
  .split("\n");

const result = input.split("").map(Number).reduce((acc, cur) => acc + cur);
console.log(result);
