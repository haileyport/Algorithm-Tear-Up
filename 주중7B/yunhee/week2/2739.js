/* 2739번 구구단 */

const fs = require("fs");
let number = +(fs.readFileSync("input.txt").toString());

// 주어진 값에 1부터 9까지 곱한 값을 2 * 1 = 2 형식으로 출력하기
function solution(number){
    for(let i = 1; i <= 9; i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

solution(number);

