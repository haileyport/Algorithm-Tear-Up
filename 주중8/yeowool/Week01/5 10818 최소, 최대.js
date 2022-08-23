let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 입력값 받아오기


let numArr = input[1].split(' '); // 숫자배열을 공백으로 나누어 배열로 만든 후 담는다.
  
let maxNum = Math.max(...numArr);
let minNum = Math.min(...numArr); // Math를 활용해서 numArr의 모든 배열의 모든 index를 검사할 수 있도록 한다.
  
console.log(`${minNum} ${maxNum}`); 