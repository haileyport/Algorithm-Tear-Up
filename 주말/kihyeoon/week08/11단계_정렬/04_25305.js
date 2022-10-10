const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map(Number);
let secondLine = input[1].split(" ").map(Number);

console.log(secondLine.sort((a, b) => b - a)[k-1]);
