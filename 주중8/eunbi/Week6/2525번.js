let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).split('\n');

// 백준 2525번, 오븐 시계
// 브론즈 3 / 9340 KB/ 120 ms

//현재 시각 A시 B분 , 필요한 시간 C분 
// 출력 : 종료되는 시각의 (0~23)시와 (0~59)분을 공백을 사이에 두고 출력 
// 주의: 23시 59분에서 1분이 지나면 0시0분 

// B와 C를 더한 값이 60이 넘으면 더해서 나온 결과값에서 -60 후 남은 분을 B로 설정,  A++
// A++를 해주었을 때, 만약 A가 24이상이면 A-24  

// let arr = input.split(''); -> 이미 split된 변수에 또다시 split 사용불가
let currTime = input[0];
currTime = currTime.split(' ');

let A =parseInt(currTime[0]);
let B =parseInt(currTime[1]);
let C = parseInt(input[1]);

//C에 840 ,1000등의 수를 넣었을 때 안되어 반복문 추가! 
if((B + C) >= 60) {
  B = B + C
  while( B >= 60){
  B = B - 60;
  A++; 
  }
}else {
  B = B + C;
}

if(A >= 24) A = A - 24;

console.log(`${A} ${B}`); 
