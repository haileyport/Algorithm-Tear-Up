// 통과

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


// 틀린 이유 반복문 안에 변수 선언해서 reference error 뜸
let min = arr[0];
let max = arr[0];

for (let i = 0; i <count; i++) { // N개의 점수만큼

    if (max < arr[i]){max = arr[i];}
    if (min > arr[i]){min = arr[i];}
}

console.log(`${min} ${max}`);