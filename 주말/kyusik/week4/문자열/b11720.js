const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = input[1].split('');

let sum = num.reduce((acc, cur) => {
    return acc += parseInt(cur);
}, 0);

console.log(sum);