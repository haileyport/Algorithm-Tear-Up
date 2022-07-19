/* 1546번 평균 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let arr = [];
let sum = 0;

function solution(input){
    let nums = input[1].split(" ");
    let max = Math.max(...nums);

    for(let i = 0; i < nums.length; i++){
        arr[i] = (nums[i] / max) * 100;
    }

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    console.log(sum / arr.length);
}

solution(input);