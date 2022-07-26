// 통과
/*
2739 구구단

input : N (1<=N <= 9)
output : N*1 ~ N*9

풀이 시간 : 1분
*/

// 입력 받기
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 1; i<= 9; i++){ //1부터 9까지
    console.log(`${input} * ${i} = ${input*i}`);
}