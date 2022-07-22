const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let toNum = input.map((i)=>Number(i));
let multi= toNum[0]*toNum[1]*toNum[2];
let arr = Array(10).fill(0);
multi = String(multi);
for(let i=0;i<multi.length;i++){
    arr[multi[i]]++
    }
    
for(let i of arr){
console.log(i);
}