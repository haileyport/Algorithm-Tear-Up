/* 2751번 N찍기 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString();

let result = "";

function solution(n){
    for(let i = 1; i <= n; i++){
        result += (i + "\n");
    }

    console.log(result);
}

solution(input);