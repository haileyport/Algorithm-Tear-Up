let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('test.txt').toString( ).trim();

// 백준 1065번 한수 
// 실버4 / 9624KB / 128ms

// 입력값 : 1000보다 작거나 같은 자연수 N 
// 1. 한수의 개수를 카운트하는 변수 선언
// 2. num이 100보다 작다면 카운트 = num, 100이상의 수라면 100 ~ 999(1000은 등차수열이 될 수 없음)까지 반복하여 비교하는 함수 생성 
// 3. 각 자리수의 차이를 구하여 비교해준다. (문자열로 변환한 수의 자릿수 각각을 다시 숫자로 변환하여 차이 구하는 식 작성)
// 4. 각 자리수의 차이가 같다면 한수이므로 카운트해준다. 
// + count를 99로 설정 후 푸는건 틀렸다고 처리하므로 주의! 

let count = 0;
const num = parseInt(input); 

for(let n = 1; n <= num; n++){
  let strN = String(n);
  // 1부터 주어진 입력값까지 돌면서 100이하라면 카운트 증감해주고,
  // 100이상이라면 자리수의 차이를 비교하여 차이가 같다면 카운트 증감해준다. 
  if(n < 100){
    count++;
  }else if((parseInt(strN[0]) - parseInt(strN[1])) === (parseInt(strN[1]) - parseInt(strN[2]))){
    count++;
  }
}

console.log(count);

// const countNums = () => {
//   for(let n = 100; n <= num; n++){
//     let strN = String(n);

//     if((parseInt(strN[0]) - parseInt(strN[1])) === (parseInt(strN[1]) - parseInt(strN[2]))){
//       count++;
//     }
//   }
//   console.log(count);
// } 

// if(num > 100){
//   // count = 99; , 백준에서 틀렸다고 처리한다고 한다...
//   countNums();
// }else {
//   count = num; 
//   console.log(count);
// }


