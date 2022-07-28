const fs =require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const mul = String(input[0]*input[1]*input[2])



for(let i=0; i <=9; i++){
    let count = 0
    for(let j=0; j < mul.length; j++){
        if(Number(mul[j])=== i){
            count ++;
        }
    }
    console.log(count)
}