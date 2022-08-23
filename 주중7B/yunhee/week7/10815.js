/* 10815번 숫자 카드 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let myCard = new Set(input[1].split(" ").map(Number));
    let otherCard = input[3].split(" ").map(Number);
    let arr = [];

    otherCard.forEach(e => {
        if(myCard.has(e)){
            arr.push(1);
        }else{
            arr.push(0);
        }
    });
    
    console.log(arr.join(" "));
}

solution(input);