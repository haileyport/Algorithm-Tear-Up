/* 10870번 피보나치 수 */

let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString();

function solution(input){ 
    let arr = [];

    for(let i = 0; i <= input; i++){
        if(i === 0 || i === 1){
            arr[i] = i;
        }else{
            arr[i] = (arr[i - 2]) + (arr[i - 1]);
        }  
    }

    console.log(arr[arr.length - 1]);
}

solution(input);