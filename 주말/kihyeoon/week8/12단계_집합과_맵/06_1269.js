const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
const uni = [...new Set([...A, ...B])];

console.log(uni.length * 2 - (A.length + B.length));
