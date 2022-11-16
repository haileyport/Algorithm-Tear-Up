const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

//1000 70x = 170x 
//console.log(input)
let num1= Number(input[0])
let num2= Number(input[1])
let num3= Number(input[2])

let sum = num1/(num3-num2)
let result = Math.floor(sum)+1;

num2 >= num3 ? (result=-1) : result

console.log(result)