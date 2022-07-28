const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num= input[0];//5
const ob =input[1].split(' ');

let sum = 0;
const max = Math.max(...ob); //최대값 16
for(let i =0 ; i < num ; i++){
    sum += ob[i]/max *100;
    
}

console.log(sum / num);