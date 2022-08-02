const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = BigInt(input[0]);
let B = BigInt(input[1]);
console.log(String(A + B));