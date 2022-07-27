const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let n = parseInt(input[0]);
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);