const fs = require('fs')
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = Number(input[0]);

function fact(num){
    if(num <= 1){
        return 1;
    }
    return num * fact(num-1) //
}
console.log(fact(input)) 