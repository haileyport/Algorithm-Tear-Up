const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

const reverseArr = input.sort((a, b) => a - b);

console.log(reverseArr.join('\n'));

/* 
5 4 3 2 1

4 5 3 2 1
4 3 5 2 1
4 3 2 5 1
4 3 2 1 5

*/