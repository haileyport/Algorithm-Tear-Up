/* 10871번 X보다 작은 수 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

let n = +input[0].split(" ")[0];
let x = +input[0].split(" ")[1];
let temp = input[1].split(" ");

let result = "";

function solution(n, x, temp){
    for(let i = 0; i < n; i++){
        if(temp[i] < x){
            result += temp[i] + " ";
        }
    }

    console.log(result);
}

solution(n, x, temp);