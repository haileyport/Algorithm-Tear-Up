/* 1065번 한수 */

let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString();

function solution(input){ 
    let count = 0;

    for(let i = 1; i <= input; i++){
        let num = String(i);
        let dif = num[1] - num[0];

        for(let j = 0; j < num.length; j++){
            if((num[j+1] - num[j]) !== dif){
                break;
            }

            if(j === num.length - 1){
                count++;
            }
        }
    }

    console.log(count);
}

solution(input);