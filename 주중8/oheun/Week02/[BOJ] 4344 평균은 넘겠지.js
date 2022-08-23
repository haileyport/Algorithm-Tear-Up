// 틀린 이유 : Type Error

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

const testcase = input[0]; // 테스트 케이스 개수만큼

let sum = 0;            // 점수 합
let average = 0;        // 평균

// 이중반복문
for (let i = 1; i < testcase; i++) {
    // 각 행마다
    // slice로 학생 수와 점수 구분
    let student = parseInt(input[i].slice(0,1)); // 학생의 수 => int
    let score =  input[i].slice(1) // 학생 점수 
    // reduce를 이용해서 합
    sum = score.reduce(function(a, b){ return a + b; }, 0);
    average = sum/student; // 평균
    let count = 0;          // 평균보다 많은 학생 수
    for (let j = 0; j< student; j++) {
        // 평균이 전체 합의 몇 퍼센트인지 보면 됨
        if(score[j] > average){
            count++;
        }
    }
  
    console.log(((count / student) * 100).toFixed(3) + '%');
    
}
