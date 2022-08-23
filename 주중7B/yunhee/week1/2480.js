/* 2480번 주사위 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

if(num1 === num2 && num2 === num3 && num3 === num1){
    // 10,000원+(같은 눈)×1,000원
    console.log(10000 + num1 * 1000);
}else if(num1 === num2){
    // 1,000원+(같은 눈)×100원
    console.log(1000 + num1 * 100);
}else if(num1 === num3){
    // 1,000원+(같은 눈)×100원
    console.log(1000 + num1 * 100);
}else if(num2 === num3){
    // 1,000원+(같은 눈)×100원
    console.log(1000 + num2 * 100);
}else{
    // (그 중 가장 큰 눈)×100원
    let max = Math.max(num1, num2, num3);
    
    console.log(max * 100);
}