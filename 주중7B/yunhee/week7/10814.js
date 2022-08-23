/* 10814번 나이순 정렬 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let n = input.shift();
    let arr = input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]).join("\n");

    console.log(arr);
}

solution(input);