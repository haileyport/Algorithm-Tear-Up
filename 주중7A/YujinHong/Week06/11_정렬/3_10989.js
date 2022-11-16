const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n");

const sortNum = input
  .slice(1)
  .sort((a, b) => a - b)
  .join("\n");

console.log(sortNum);
