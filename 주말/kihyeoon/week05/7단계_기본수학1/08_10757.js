let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "08_10757.txt")
  .toString()
  .split(" ");
const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());
