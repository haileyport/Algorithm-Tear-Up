let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('test.txt').toString( ).trim();

// 백준 1712번, 

// A : 고정 비용
// B : 가변 비용
// C : 판매 비용  
// n : 판매량
// A +(B * n ) < C * n 이 성립될 때를 구해야한다.
// B가 C보다 작아야 성립되나? 
// 시간제한 0.35초라 반복문 사용 시 시간초과
input = input.split(' ');

const A = parseInt(input[0]); 
const B = parseInt(input[1]);
const C = parseInt(input[2]);

// let n = 1;

// const getBEP = () => {
//   while((A + (B * n)) > (C * n)){

//     if(B > C){
//       console.log(B);
//       console.log(C);
//       return -1;
//     }
    
//     n++;
//   }
  
//   if((A + (B * n)) === (C * n)){
//     n++;
//   }

//   return n;
// }

// console.log(getBEP());


if(B >= C){
  console.log(-1);
}else{
  // 계속 틀려서 혹시나 하고 소수점 정리해보니 통과 
  console.log(Math.floor(A / (C - B)) + 1);
}