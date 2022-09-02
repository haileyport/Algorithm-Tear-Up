let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./02_10950.txt').toString().split('\n');

let numberLoop = Number(input[0]);
for (let i = 1; i < numberLoop+1; i++){
  console.log(Number(input[i][0]) + Number(input[i][2]))
}

// function solution(text_input){
//   let numberLoop = Number(text_input[0]);
//   for (let i = 1; i < numberLoop+1; i++){
//     console.log(Number(text_input[i][0]) + Number(text_input[i][2]))
//   }
// }

// solution(input)
