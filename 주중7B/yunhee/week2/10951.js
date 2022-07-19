/* 10951번 A+B-4 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

function solution(input){
    for(let i = 0; i < input.length - 1; i++){
        let a = +input[i].split(" ")[0];
        let b = +input[i].split(" ")[1];

        console.log(a+b);
    }
}

solution(input);


