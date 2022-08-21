const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((i)=>Number(i))
let arr = [];
for(key of input){
    arr.push(key%42);
}
let arr2 = [...new Set(arr)]
console.log(arr2.length);