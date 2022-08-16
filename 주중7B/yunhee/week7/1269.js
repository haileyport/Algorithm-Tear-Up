/* 1269번 대칭 차집합 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let a = new Set(input[1].split(" "));
    let b = input[2].split(" ");
    let count = 0;

    for(let i = 0; i < b.length; i++){
        if(a.has(b[i])){
            count++;
        }
    }

    console.log((a.size - count) + (b.length - count));
}

solution(input);