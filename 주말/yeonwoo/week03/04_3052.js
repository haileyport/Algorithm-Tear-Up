const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);
const arr = input.map((el) => el % 42);
const set = new Set(arr);
const uniqueArr = [...set];
console.log(uniqueArr.length);
