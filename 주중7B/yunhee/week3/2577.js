/* 2577번 숫자의 개수 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let arr = [];

function solution(input){
    let temp = String(input[0] * input[1] * input[2]);

    for(let i = 0; i < temp.length; i++){
        arr[+temp[i]] = arr[+temp[i]] !== undefined ? ++arr[+temp[i]] : 1;
    }

    for(let i = 0; i < 10; i++){
        if(arr[i] === undefined){
            console.log(0);
        }else{
            console.log(arr[i]); 
        }
    }
}

solution(input);