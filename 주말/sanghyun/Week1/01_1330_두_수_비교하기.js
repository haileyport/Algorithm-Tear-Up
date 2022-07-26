// fs는 npm모듈
// let fs = require('fs') fs모듈을 사용하겠다
// fs에서 readFileSync('주소는 fix') -> 사용할 수 있게 string갑으로 사용하여, split으로 배열로 만들어준다
// let input = fs.readFileSync('')

// console.log가 출력값으로 작성되어 있음

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

if (a > b){
  console.log('>');
}else if (a < b){
  console.log('<') ;
}else {
  console.log('==');
}


// function solution (a, b){
//   if (a > b){
//     return '>';
//   }else if (a < b){
//     return '<';
//   }else {
//     return '=='
//   }
// };

