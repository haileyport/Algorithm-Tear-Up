let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");


let num1 = BigInt(inputs[0])
let num2 =BigInt(inputs[1])
let sum =num1+num2
console.log(sum.toString())