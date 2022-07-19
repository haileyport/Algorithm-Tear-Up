let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./14_1110.txt').toString().split(' ');

let firstNum = input[0];
let i = 0
let sum = 0

function solution (income){
  // 먼저 들어온 숫자가 2자릿수?
  // 만약 아니라면 앞에 0을 붙여줘야함
  if (income.length === 1){
    income = '0' + income;
  }
  // 처음 숫자(income)를 2개로 나줘줘야 함
  let firstPlace = income[0];
  let secondPlace = income[1];
  // console.log(firstPlace, secondPlace) //string
  // console.log(income); // string
  
  /* 조건문 시작 */
  // 1. 앞자리 + 뒷자리 = 합
  // 1-1. 합이 일의 자리 숫자면 체크 
  // 2. firtNum === 합 체크 
  // 2-1. -> 맞다면 count 출력
  // 2-2. -> 틀리다면 변수 재할당: 앞자리 = 이전 뒷자리, 뒷자리 = 합의 일의 자리
  while(true){
    // 만약 0이라면 1을 출력
    if (income === '0'){
      i = 1;
      break
    }
    i++;
    sum = Number(firstPlace) + Number(secondPlace); //  2 + 6 = 8  2: 6 + 8 = 14
    let inst = ''
    if(sum < 10){
      firstPlace = secondPlace; // string 6
      secondPlace = String(sum); // string 8
      inst = firstPlace + secondPlace; // string 68
    }else{
      firstPlace = secondPlace; // string 8
      secondPlace = String(sum)[1]; // string 4
      inst = firstPlace + secondPlace; // 84
    }
    if (inst === income){
      break
    }
  }
}
solution(firstNum);
console.log(i);
