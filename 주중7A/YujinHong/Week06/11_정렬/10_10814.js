const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "))
  .slice(1);

input.sort((a, b) => a[0] - b[0]);

console.log(input.map((el) => el.join(" ")).join("\n"));
