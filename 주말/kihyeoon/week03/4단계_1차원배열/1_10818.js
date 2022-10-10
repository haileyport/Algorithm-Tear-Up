const [firstLine, input] = require("fs")
  .readFileSync("1_10818.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(firstLine);
const arr = input.split(" ").map(Number);

// 오름차순으로 정렬
arr.sort((a, b) => a - b);

console.log(`${arr[0]} ${arr[count - 1]}`);
