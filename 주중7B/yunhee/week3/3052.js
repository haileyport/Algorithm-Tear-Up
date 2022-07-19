/* 3052번 나머지 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n").map(Number);

let arr = [];

function solution(input){
    for(let num of input){
        num = num % 42;

        if(!arr.includes(num)){
            arr.push(num);
        }
    }
    console.log(arr.length);
}

solution(input);