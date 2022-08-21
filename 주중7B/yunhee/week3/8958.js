/* 8958번 OX퀴즈 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

function solution(input){
    for(let i = 1; i <= input[0]; i++){
        let temp = input[i];
        let arr = [];
        let acc = 0;
        let sum = 0;
        
         for(let j = 0; j < temp.length; j++){
            acc = temp[j] === "O" ? ++acc : 0;
            arr[j] = acc;
        }

        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }

        console.log(sum);
    }
}

solution(input);