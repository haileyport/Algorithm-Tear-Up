// 백준 4673번 - 셀프 넘버 
// 실버5 / 2992KB / 400ms 

// 1. 함수 내 1부터 10,000까지 도는 반복문 생성 (While문) -
// 1. 임의의 수를 받아 그 수와 수의 자리수 하나씩 더하는 함수 생성 
// 2. 셀프 넘버가 아닌 값이 들어갈 배열 생성 
// 3. 함수 내 1부터 10,000까지 도는 반복문 생성 (반복문 내 함수 실행)
// 4. 함수 결과값을 배열에 추가
// 5. 다시 1~10,000까지 도는 반복문을 이용하여 생성자가 있는 수들의 배열과 일치하지 않는 수 
//  즉, 셀프넘버들을 하나씩 출력한다. 

// 코드 작성하며 가독성 및 기능적인 부분을 생각해보며 함수들로 묶어 깔끔해보이도록 작성해 봄

let fs = require('fs');
const { format } = require('path');
let input = fs.readFileSync('/dev/stdin').toString();
// let input = fs.readFileSync('test.txt').toString( );

let n = 1;
let notSelfNums = [];
let sum;

// 화살표함수는 함수선언 호이스팅이 되지않는다(표현식과 같이 취급) 
const sumNums = () => { 
  sum = n;
  for(let i = 0; i < String(n).length; i++){
    sum = sum + parseInt(String(n)[i]);
  }
  return sum ; 
}

const getNotSelfNums = () => {
  while(n < 10000){
  sumNums();

    if(!notSelfNums.includes(sum)){
      notSelfNums.push(sum);
    }
    n++;
  }

  return notSelfNums;
}

const getSelfNums = () => {
  getNotSelfNums();

  n = 1;

  while(n < 10000){
    if(!notSelfNums.includes(n)){
      console.log(n);
    }
    n++;
  }

  return;
}

getSelfNums();


