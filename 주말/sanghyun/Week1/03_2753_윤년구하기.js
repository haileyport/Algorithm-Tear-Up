const fs = require('fs');
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const year = Number(input[0]);

if (year % 4 === 0){
  if (year % 100 !== 0 || year % 400 === 0){
    console.log('1');
  }else{
    console.log('0');
  }
}else{
  console.log('0');
}
 


// let score = Number(input[0]);
// function solution (year){
//   if (year % 4 === 0){
//     if (year % 100 !== 0 || year % 400 === 0){
//       return 1;
//     }
//   }
//   return 0;
// }