const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split("").map(Number);

const total = numbers.reduce((acc, cur) => {
  return acc + cur;
});

console.log(total);
