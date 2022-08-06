/* 8393번 합 */

const fs = require("fs");
const input = +(fs.readFileSync("input.txt").toString());
let sum = 0;

// 1부터 n까지 더한 값을 sum에 누적하기
function solution(n){
    for(let i = 1; i <= n; i++){
        sum += i;
    }

    console.log(sum);
}

solution(input);
