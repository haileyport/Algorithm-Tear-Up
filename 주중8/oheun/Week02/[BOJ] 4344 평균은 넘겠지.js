/*
평균은 넘겠지

input : 
    - 개수 C
    - 케이스 별 N명의 점수 (0<= 점수 <=100)

output :
    - 평균 넘는 학생 반올림하여 소수점 셋째 자리까지 출력
*/


// 입력을 어떻게 받아야 할까? : 행 구분 문자로 나누고

// 입출력 처리
// 공백으로 구분된 한 줄의 값들을 입력 받을 때
const fs = require('fs');
// /dev/stdin을 적용해 stdin 파일을 비동기적으로 불러와 처리하는 것
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 줄 나누기

const count = input[0];

for (let i = 0; i < count; i++) {
    const arr[i] = input[i].split(' ').map(Number);// 2번째 줄을 공백을 기준으로 추출한다.
}
