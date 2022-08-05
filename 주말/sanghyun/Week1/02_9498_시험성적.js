const fs = require('fs');
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let score = Number(input[0]);

  if(score > 89) {
    console.log('A');
  }else if (score < 90 && score > 79){
    console.log('B');
  }else if (score < 80 && score > 69){
    console.log('C');
  }else if (score < 70 && score > 59){
    console.log('D');
  }else {
    console.log('F');
  }


// function solution(score) {
//   if(score > 89) {
//     return 'A';
//   }else if (score < 90 && score > 79){
//     return 'B';
//   }else if (score < 80 && score > 69){
//     return 'C';
//   }else if (score < 70 && score > 59){
//     return 'D';
//   }else {
//     return 'F'
//   }
// }

