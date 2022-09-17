/* 10816번 숫자 카드2 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){   
    let myCard = input[1].split(" ").map(Number);
    let otherCard = new Set(input[3].split(" ").map(Number));
    let arr = [];

    otherCard.forEach(e => {
        if(myCard.includes(e)){
            arr.push(myCard.filter(el => el === e).length);
        }else{
            arr.push(0);
        }
    });
    
    console.log(arr.join(" "));
}

solution(input);