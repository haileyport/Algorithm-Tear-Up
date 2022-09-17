/* 10818번 최소, 최대 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

function solution(input){
    let arr = input[1].split(" ").map(Number);
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    console.log(min, max);
}

solution(input);