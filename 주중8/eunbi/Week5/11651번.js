// 백준 11651번, 좌표 정렬하기 2
// 실버 5/ 58280KB / 468ms

// 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
const { FORMERR } = require('dns');
let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('test.txt').toString( ).trim().split('\n');

input.shift();

const arr = input.map(el => el.split(' ').map(el => parseInt(el)));
// const result = [];

arr.sort((a, b) => {
  if(a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let result = '';
arr.forEach(el => result += `${el[0]} ${el[1]}\n`);
console.log(result);

// arr.map(el => {
//   let count = 0;
//   for(let j = 0; j < arr.length; j++){
//     let y = el[1];
//     let x = el[0];
//       if(el!== arr[j]){
//         if(y > arr[j][1]) count++;

//         if(y === arr[j][1]){
//           if(x > arr[j][0]) count++;
//           else if(x === arr[j][0]){
//             if(result.includes(x)){
//               count++;
//         }
//       }
//     }
//   }
//   }
//       result[count] = el;
// })

// 
// for(let i = 0; i < arr.length; i++){
//   let count = 0;
//   for(let j = 0; j < arr.length; j++){
//     if(i !== j){
//       if(arr[i][1] > arr[j][1]) count++;
//       if(arr[i][1] === arr[j][1]){
//         if(arr[i][0] > arr[j][0]) count++;
//         else if(arr[i][0] === arr[j][0]){
//           if(result.includes(arr[i])){
//             count++;
//           }
//         }
//       }
//     }
//   }
//   result[count] = arr[i];
// }

// console.log(result);


