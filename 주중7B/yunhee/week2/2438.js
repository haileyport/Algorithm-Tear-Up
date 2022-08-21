/* 2438번 별 찍기 - 1 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString();

let result = "";

function solution(input){
    for(let i = 0; i < input; i++){
        for(let j = 0; j <= i; j++){
            result += "*";
        }
        result += "\n";
    }
    
    console.log(result);
}

solution(input);