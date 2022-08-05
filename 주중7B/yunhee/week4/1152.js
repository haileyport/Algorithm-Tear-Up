/* 1152번 단어의 개수 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

function solution(input){
    // 문장을 공백으로 나눈 다음 길이를 확인한다.
    console.log(input.length > 0 ? input.split(" ").length : 0);
}   

solution(input);