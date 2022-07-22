/* 10872번 팩토리얼 */

let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString();

function solution(input){ 
    let result = 1;

    for(let i = 1; i <= input; i++){
        result *= i;
    }
    
    console.log(result);
}

solution(input);