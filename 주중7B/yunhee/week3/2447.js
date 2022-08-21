/* 2447번 별 찍기 */

let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString();

let result = "";

function PaintStar(i, j){
    // 공백이 들어가는 좌표에서 패턴을 찿는다. (1,1) / (1,4) / (1,7)
    // i % 3 === 1 && j % 3 === 1
    if(i % 3 === 1 && j % 3 === 1){
        result += " ";
    }else{
        if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
            result += "*";
        }else{
            PaintStar(Math.floor(i / 3), Math.floor(j / 3));
        }
    }
}

function solution(input){
    for(let i = 0; i < input; i++){
        for(let j = 0; j < input; j++){
            PaintStar(i, j);
        }
        
        if(i !== input - 1){
            result += "\n";
        }
    }

    console.log(result);
}

solution(input);