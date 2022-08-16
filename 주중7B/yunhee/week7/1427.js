/* 1427번 소트인사이드 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

function solution(input){   
    // 수의 각 자리수를 내림차순으로 정렬 
    let arr = input.split("").map(Number).sort((a,b) => b - a).join("");    
    console.log(arr);
}

solution(input);