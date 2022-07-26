let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( );

// // 조건문을 이용해 한자리 수인지 두자리 수인지 비교
// // 한자리 수 라면 0 + n
// // 두자리라면 front, end 로 변수에 숫자 형변환 후 할당

let front;
let end;
let sum;
let newNum ;
let count = 0;
// 백준에서 input 자체를 문자로 사용하여 문자 뒤 \n 같은게 붙어 계속 오류..
// 따라서 앞뒤 공백이나 줄바꿈 등의 문자를 잘라주는 trim method 사용
input = input.trim();

if(input.length === 1){
  // 한자리의 수라면,
  front = '0';
  end = input[0]; 
}else{ // 두자리의 수 라면? 
  front = input[0];
  end = input[1];
}

for(let i = 0; i <= 99; i++){

  // 각 자릿 수를 숫자열로 변환 후 더한 값을 sum에 할당해주고 다음 비교를 위해 문자열로 변환
  sum = String(Number(front) + Number(end));
//   sum = String(sum);
  newNum = end + sum[sum.length - 1];
  // newNum이 생길 때 마다(연산될 때 마다) count에 1씩 더해준다 
  count++;

  // console.log(`${newNum} = ${count}`);

  // 새로 생긴 값(newNum)이 input(입력값)과 같은지 비교 
  // console.log(newNum);
  if(newNum[0] === '0' && newNum[1] === input || newNum === input ){
  // if(newNum === input){
    // 같은 값이라면 count 반환 
    console.log(count);
    return count;
  }else {
    // 값이 다르다면 각 자릿 수를 다시 front, end에 할당하여 반복이 되도록 한다. 
    front = newNum[0];
    end = newNum[1];
  }
}
