let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./01_1712.txt').toString().trim().split(' ');

// 1000 70 170
let A = Number(input[0]); // 고정비용
let B = Number(input[1]); // 생산비용
let C = Number(input[2]); // 노트북 가격

let n = Math.floor((A / ( C - B )) + 1);
// let answer = Math.floor(A / (C - B)) + 1;


B >= C ? console.log(-1) : console.log(n);


