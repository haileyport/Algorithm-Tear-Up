/*
연도가 주어졌을때 윤년이면 1, 아니면 0 출력
윤년은 4의 배수이면서 100의 배수가 아닐 때, 또는 400의 배수일 때
입력은 1보다 크거나 같고 4000보다 작거나 같은 자연수

1. input % 4 === 0 && input % 100 !== 0 이면 1
2. 400의 배수면 1
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

if (input % 4 === 0 && input % 100 !== 0) {
    console.log(1);
} else if (input % 400 === 0) {
    console.log(1);
} else {
    console.log(0);
}