/* 2562번 최댓값 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

function solution(input){
    let count = 0;
    let maxVal = 0;

    for(let i = 0; i < input.length; i++){
        if(+input[i] > maxVal){
            maxVal = +input[i];
            count = i + 1;
        }
    }

    console.log(maxVal);
    console.log(count);
}

solution(input);