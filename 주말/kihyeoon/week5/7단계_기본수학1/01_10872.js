const [A, B, C] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "01_10872.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = B >= C ? -1 : Math.floor(A / (C - B)) + 1;

console.log(result);
