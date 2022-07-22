let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( );


// 공백을 기준으로 나눠 각 변수에 담아준다. 
input = input.split(' ');
// console.log(input);

// split된 요소들은 '문자열' 이므로 비교를 위해 
// Number 형변환을 해주어야 함...
// but, console에서는 왜 동작했지...?
const A = Number(input[0]);
const B = Number(input[0]);
// console.log(A , B);

if(A > B){
  console.log('>');
}else if(A < B){
  console.log('<');
}else {
  console.log('==');
}