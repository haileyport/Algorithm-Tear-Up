/* 1764번 듣보잡 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let n = +input[0].split(" ")[0];
    let setA = new Set(input.slice(1, n+1));
    let arrB = input.slice(n+1);
    let result = [];

   for(let i = 0; i < arrB.length; i++){
        if(setA.has(arrB[i])){
            result.push(arrB[i]);
        } 
   }

   result.unshift(result.length);
   console.log(result.sort().join("\n"));
}

solution(input);