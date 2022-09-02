/* 14425번 문자열 집합 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let n = +input[0].split(" ")[0];
    let m = +input[0].split(" ")[1];
    let set = new Set(input.slice(1, n+1));
    let arr = [];

    for(let i = n + 1; i <= n + m; i++){
        if(set.has(input[i])){
            arr.push(input[i]);
        }
    }

    console.log(arr.length);
}

solution(input);