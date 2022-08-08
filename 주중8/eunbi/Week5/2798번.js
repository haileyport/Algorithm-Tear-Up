let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( );

// 백준 2798번, 블랙잭 
// 브론즈 2/ 9616KB / 176ms

// input의 첫째 줄은 N(카드 개수), M (딜러가 부른 수)
// 둘째 줄은 N개의 수가 나열되어있음 

input = input.split('\n');

let M = (input[0].split(' '))[1];
let numbers = input[1].split(' ');
numbers = numbers.map(el => parseInt(el));

let closest = 0;
// 왜 틀렸지...? -> '브루트포스'! 아마도 for문 세개 작성이 숨은 조건인듯..
// const getCloseNum = (arr) => {
//   for(let i = 1; i < arr.length - 1; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       let sum = arr[0] + arr[i] + arr[j];
//       if(sum <= M && sum > closest){
//         closest = sum;
//       }
//     }
//   }
//   // arr.shift();
//   arr = arr.slice(1);
//   // console.log(arr);
//   if(arr.length === 2){
//     return closest;
//   }

//   return getCloseNum(arr);
// }

// console.log(getCloseNum(numbers)); 

for(let i = 0; i < numbers.length - 2; i++ ){
  for(let j = i + 1; j < numbers.length - 1; j++){
    for(let n = j + 1; n < numbers.length; n++){
      let sum = numbers[i] + numbers[j] + numbers[n];
      if(sum <= M && sum > closest){
        closest = sum;
      }
    }
  }
}

console.log(closest);