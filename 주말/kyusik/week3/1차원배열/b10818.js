const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = input[0];
let numArr = input[1].split(' ');

console.log(Math.min(...numArr), Math.max(...numArr));
