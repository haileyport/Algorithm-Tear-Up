//N개의 숫자가 공백 없이 쓰여있다. 
//이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
let num = input[1].split("");
num = num.map(x=>Number(x))
let output = num.reduce((a,b)=> a+b,0);

console.log(output)