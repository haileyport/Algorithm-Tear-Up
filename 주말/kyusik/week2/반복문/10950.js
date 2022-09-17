const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = input[0];
for (let i = 1; i <= t; i++) {
    let number = input[i].split(' ');
    console.log(parseInt(number[0]) + parseInt(number[1]));
}