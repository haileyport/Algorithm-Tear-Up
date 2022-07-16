const fs =require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length ; i++) {
    let arr = input[i].split(' ');
    let a = Number(arr[0]);
    let b = Number(arr[1]);
    
    console.log(a+b);//
}
    