const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    let pairNumber = input[i].split(' ');
    console.log(parseInt(pairNumber[0]) + parseInt(pairNumber[1]));
}