/* 11653번 소인수분해 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString().trim();

function solution(input){
    if(input !== 1){
        for(let i = 2; i <= input; i++){
            while(input % i === 0){
                console.log(i);
                input /= i;
            }
        }
    }
}

solution(input);