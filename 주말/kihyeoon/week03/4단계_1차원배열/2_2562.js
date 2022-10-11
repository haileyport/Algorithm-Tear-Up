const [...input] = require("fs")
  .readFileSync("2_2562.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = input.reduce((acc, cur) => {
  if (acc >= cur) {
    return acc;
  } else {
    return cur;
  }
});

console.log(max);
console.log(input.indexOf(max)+1);
