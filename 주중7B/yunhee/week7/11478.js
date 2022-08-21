/* 11478번 서로 다른 부분 문자열의 개수 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

function solution(input){   
    let set = new Set();

    for(let i = 0; i < input.length; i++){
        for(let j = i; j < input.length; j++){
            set.add(input.slice(i, j+1));
            console.log(input.slice(i, j+1));
        }
    }

    console.log(set.size);
}

solution(input);