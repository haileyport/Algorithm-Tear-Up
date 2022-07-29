// N개의 숫자가 공백 없이 쓰여있다.
// 이 숫자를 모두 합해서 출력

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n");

const nums = input[1].split("").map((num) => Number(num));

console.log(nums.reduce((acc, cur) => acc + cur));
