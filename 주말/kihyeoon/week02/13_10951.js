const input = require("fs")
  .readFileSync("13_10951.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "));

input.map((arr) => console.log(arr.map(Number).reduce((a, b) => a + b)));
