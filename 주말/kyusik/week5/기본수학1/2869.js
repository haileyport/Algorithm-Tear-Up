const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let V = parseInt(input[2]);

console.log(Math.ceil((V - A) / (A - B) + 1));

/* 
1일 밤 2미터
2일 낮 1미터
2일 밤 3미터
3일 낮 2미터
3일 밤 4미터
4일 낮 3미터
5일 밤 5미터

2 1 5 A B V

(V-A / A-B) + 1
*/


