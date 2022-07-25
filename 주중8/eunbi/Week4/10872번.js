let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).trim();

// 백준 10872번, 팩토리얼
// 브론즈5/ 9588KB / 132ms

// 0보다 크거나 같은 정수 N, N! 출력
// 0 <= N <=12

// N이 0이면 1 반환
// 1부터 N까지 반복하며 곱하는 반복문 생성 

let N = parseInt(input);
let result = 1;

if(N === 0){
  console.log(1);
}else{
  for(let i = 1; i <= N; i++){
    result *= i;
  }
  console.log(result);
}