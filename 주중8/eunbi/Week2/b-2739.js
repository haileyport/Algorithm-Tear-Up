let fs = require('fs');
let input = fs.readFileSync('test.txt').toString( );
// let input = fs.readFileSync('/dev/stdin').toString();

// 입력받은 문자열을 숫자로 형변환 하여 재할당해주기 
input = Number(input);

// 구구단 함수 작성 
// 반복문을 이용해 i가 1부터 9까지 반복되도록 작성 
// template literals를 이용해 연산 시각화해주기 
function multiplication(n){
  for(let i = 1; i < 10; i++){
    console.log( `${n} * ${i} = ${n * i}`);
  }
  return;
}

multiplication(input);
