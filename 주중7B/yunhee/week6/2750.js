/* 2750번 수 정렬하기 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

function solution(input){
    let temp = 0;

    // 앞에 수의 개수를 제외
    input.shift();

    // 오름 차순으로 정렬
    for(let i = 0; i < input.length; i++){
        for(let j = 1; j < input.length - i; j++){
            if(input[j-1] > input[j]){
                temp = input[j-1];
                input[j-1] = input[j];
                input[j] = temp;
            }
        }
    }

    for(let i = 0; i < input.length; i++){
        console.log(input[i]);
    }
}

solution(input);