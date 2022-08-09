const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

let num1 =Number(input[0])
let num2 =Number(input[1])
let num3= Number(input[2])
// 5m인 나무를 2미터올라가는데 1m씩 미끄러짐 
// 5 / (2-1) // 6/4=1
//let N = Math.floor(num3 / (num1- num2)) // 5
//let result = N+1//4
//100일경우 90일까지 하면 100미터 훅올라가니까 100을 뺴줘야..?
let result = 0;
result = Math.ceil((num3-num2)/(num1-num2))
   

console.log(result)