/* 10952번 A+B-5 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

function solution(input){
    for(let i = 0; i < input.length; i++){
        let a = +input[i].split(" ")[0];
        let b = +input[i].split(" ")[1];

        if(a+b !== 0){
            console.log(a+b);
        }else{
            break;
        }
    }
}

solution(input);

