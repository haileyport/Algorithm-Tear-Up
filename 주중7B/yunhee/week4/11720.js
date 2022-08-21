/* 11720번 숫자의 합 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

function solution(input){
    let count = +input[0];
    let nums = input[1];
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += +nums[i];
    }
    
    console.log(sum);
}

solution(input);