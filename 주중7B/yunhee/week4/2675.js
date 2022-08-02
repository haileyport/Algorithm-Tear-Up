/* 2675번 문자열 반복 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let result = "";

function solution(input){
    for(let i = 1; i <= input[0]; i++){
        let repeatNum = +input[i].split(" ")[0];
        let str = input[i].split(" ")[1];

        for(let j = 0; j < str.length; j++){
            result += (str[j].repeat(repeatNum));
        }
        
        result += "\n";
    }

    console.log(result);
}

solution(input);