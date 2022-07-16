const fs =require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);

let result = '';
for(let i =1; i <= num ; i ++){
    result = result + "*" ;
    console.log(result);
}