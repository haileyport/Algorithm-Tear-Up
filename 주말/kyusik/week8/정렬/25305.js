const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = parseInt(input[0].split(' ')[1]);
const numbers = input[1].split(' ');
numbers.sort((a, b) => b - a);

console.log(numbers[K - 1]);