/* 11022번 A+B-8 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

let testCase = +input[0];
let result = "";

function solution(input){
    for(let i = 1; i <= testCase; i++){
        let a = +input[i].split(" ")[0];
        let b = +input[i].split(" ")[1];

        result += `Case #${i}: ${a} + ${b} = ${a+b}\n`;
    }

    console.log(result);
}

solution(input);