const input = require("fs")
  .readFileSync("12_10952.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "));

input.pop();
input.map((arr) => console.log(arr.map(Number).reduce((a, b) => a + b)));
