const fs =require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = input[0].split(' ');//첫번째줄
const num = input[1].split(' ');// 두번쨰줄

const one = Number(arr[0])//첫번째줄 10
const two = Number(arr[1])//첫번째줄 5

let result = [];
for( let i = 0 ; i < one ; i ++){
    if(Number(num[i]) < two){
     result.push(num[i]);  
       
    }
}
console.log(result.join(' '));