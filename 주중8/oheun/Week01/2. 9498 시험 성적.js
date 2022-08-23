/* 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
input : 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수
output : 등급

메모리 9332 KB, 시간 128ms
*/

// 입력값을 성적만 받음.
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

// input을 그대로 사용해도 될까?

// 90이상, 100 이하를 && 연산자로 나타냄.
if (90 <= input && input <= 100){
    console.log('A');
}else if (80 <= input && input <= 89){
    console.log('B');
}else if (70 <= input && input <= 79){
    console.log('C');
}else if (60 <= input && input <= 69){
    console.log('D');
}else{
    console.log('F');
}