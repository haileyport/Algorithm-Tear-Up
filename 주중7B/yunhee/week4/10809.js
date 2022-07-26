/* 10809번 알파벳 찾기 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

let result = "";

function solution(input){
    for(let i = 97; i <= 122; i++ ){
        let char = String.fromCharCode(i);
        result += input.indexOf(char) + " ";
    }

    console.log(result);
}

solution(input);