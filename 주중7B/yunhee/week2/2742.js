/* 2742번 기찍 N */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString();

let result = "";

function solution(n){
    for(let i = n; i > 0; i--){
        result += (i + "\n");
    }

    console.log(result);
}

solution(input);