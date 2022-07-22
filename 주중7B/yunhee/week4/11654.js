/* 11654번 아스키코드 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

function solution(input){
    // 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때 주어진 글자의 아스키 코드값을 출력
    console.log(input.charCodeAt());
}

solution(input);