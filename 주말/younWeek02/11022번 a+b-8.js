const fs =require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);

for(let i = 1 ; i <= num ; i ++){
    let result = input[i].split(' ');
    let a = Number(result[0]);
    let b = Number(result[1]);
      console.log(`Case #${i}: ${a} + ${b} = ${a+b}`);//
}