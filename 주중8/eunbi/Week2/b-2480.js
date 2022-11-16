let fs = require('fs');
let input = fs.readFileSync('test.txt').toString( );
// let input = fs.readFileSync('/dev/stdin').toString();

// 1 ~ 6 , 3개의 주사위 
// 같은 눈 3개 => 10,000원 + (같은 눈)*1,000원 
// 같은 눈 2개 => 1,000원 + (같은 눈)*100원 
// 모두 다른 눈 3개 => (가장 큰 눈)*100원 

// 1. 내림차순 정렬 후 각각의 값을 변수로 지정 a, b, c
// 2. 비교 (조건문 이용해 각각 비교 및 그에 맞는 실행문 작성 )

input = input.split(" ");
input.sort((a, b) => b - a);
// console.log(input); 

const a = Number(input[0]); // 가장 큰 수 
const b = Number(input[1]); // 두 번째로 큰 수 
const c = Number(input[2]); // 가장 작은 수 
// console.log(a, b, c);

if(a === b && b === c) { // 같은 눈이 3개인 경우
  let prize = 10000 + (a * 1000);
  console.log(prize);
}else if(a === b && b !== c){ // 같은 눈이 2개인 경우 1 
  prize = 1000 + (a * 100);
  console.log(prize);
}else if(a !== b && b === c){ // 같은 눈이 2개인 경우 2
  prize = 1000 + (b * 100);
  console.log(prize);
}else { // 모두 다른 눈인 경우 
  prize = a * 100 ;
  console.log(prize);
}