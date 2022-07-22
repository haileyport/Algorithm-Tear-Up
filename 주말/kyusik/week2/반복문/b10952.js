const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = '';
for (let i = 0; i < input.length-1; i++) {
    let pairNumber = input[i].split(' ');
    result += (parseInt(pairNumber[0]) + parseInt(pairNumber[1])) + '\n';
}
console.log(result);