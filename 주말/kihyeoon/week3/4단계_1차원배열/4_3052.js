const [...input] = require("fs")
  .readFileSync("4_3052.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const result = [];

input.map((el) => {
  const num = el % 42;
  if (result.indexOf(num) === -1) {
    result.push(num);
  }
});

console.log(result.length);
