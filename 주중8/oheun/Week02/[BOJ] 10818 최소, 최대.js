/* 1차원 배열
문제의 최소 최댓값 구하기

input : 1<= N <= 1000000

*/




// 입력을 어떻게 받아야 할까? : 행 구분 문자로 나누고 

// 입출력 처리
// 공백으로 구분된 한 줄의 값들을 입력 받을 때
const fs = require('fs');
// /dev/stdin을 적용해 stdin 파일을 비동기적으로 불러와 처리하는 것
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 줄 나누기

const count = input[0];
const arr = input[1].split(' ').map(Number);// 2번째 줄을 공백을 기준으로 추출한다.


// 배열 정렬하기 1. sort()
    // 복사본 return이 아니라 원 배열을 정렬해버림.
// 배열 정렬하기 2. map 
console.log(arr.sort()[0], arr.sort()[count-1]);