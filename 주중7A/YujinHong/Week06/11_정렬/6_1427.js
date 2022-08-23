const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("");

const sortNum = input.sort((a, b) => b - a).join("");

console.log(sortNum);
