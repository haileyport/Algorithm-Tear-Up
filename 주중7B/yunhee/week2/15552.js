/* 15552번 빠른 A+B */

const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const input = fs.readFileSync("input.txt").toString().split("\n");

let result = "";
let testCase = Number(input[0]);

function solution(testCase, input){
    for(let i = 1; i <= testCase; i++){
        let num1 = Number(input[i].split(" ")[0]);
        let num2 = Number(input[i].split(" ")[1]);

        result += (num1 + num2) + "\n";
    }

    console.log(result);
}

solution(testCase, input);