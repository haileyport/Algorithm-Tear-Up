const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = parseInt(input[0])
const B = parseInt(input[1])
const C = parseInt(input[2])
const result = Math.floor(A / (C - B)) + 1;

(C - B <= 0) ? console.log(-1) : console.log(result);
