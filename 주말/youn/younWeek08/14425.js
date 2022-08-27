const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let num = input.shift().split(" ").map(Number)// 5 11
let num1 = num[0]
let num2 = num[1]
let num3=num1+num2
const arr1 = input.slice(0, num1)
const arr2 = input.slice(num1)

let result = [...new Set([...arr1,...arr2])]
let re = num3-result.length

console.log(re)




//시간초과