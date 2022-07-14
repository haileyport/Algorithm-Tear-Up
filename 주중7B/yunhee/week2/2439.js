/* 2439번 별 찍기 - 2 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString();

let result = "";

function solution(input){
    for(let i = 1; i <= input; i++){
        for(let j = input; j > 0; j--){
            result = j <= i ? result + "*" : result + " "; 
        }
        result += "\n";
    }
    
    console.log(result);
}

solution(input);