/* 2231번 분해합 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString().trim();

function solution(input){
    // 분해합 => n + n[0] + n[1]....
    // n의 생성자 중에 가장 작은 수
    // n이 999라고 치자 999 + 9 _ 9 + 9 => 각 자릿수의 최대수는 9 => 세개 합해봤자 18
    let min = +input;
    let sum = input - 18;

    for(let i = sum; i < +input; i++){
        for(let j = 0; j < String(sum).length; j++){
            sum += +(String(sum)[j]); 
        }

        console.log(sum);
        if(sum < min){
            min = sum;
        }
    }

    console.log(sum); 
}

solution(input);