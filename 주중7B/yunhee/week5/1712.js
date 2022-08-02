/* 1712번 손익분기점 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

function solution(input){
    // 고정 비용에서 노트북 책정가 - 가변 비용을 나눠주면 손익분기점이 나온다.
    let num = Math.floor(input[0] / (input[2] - input[1]));
    
    // 가변 비용이 노트북 가격보다 크다면 손익분기점이 존재하지 않으므로 -1을 출력한다. 
    console.log(input[1] > input[2] ? -1 : num + 1);
}

solution(input);