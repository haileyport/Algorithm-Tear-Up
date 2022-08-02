/* 10757번 큰 수 A+B */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

function solution(input){
    // A+B 출력
    console.log((BigInt(input[0]) + BigInt(input[1])).toString());
}

solution(input);