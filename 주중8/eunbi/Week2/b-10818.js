let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( );

// 1. 입력값을 개행 기준 먼저 split해주어 N과 정수들을 두개의 배열로 나눈다.
// 2. 다시 정수들이 담긴 배열을 공백기준으로 split 해준다
// 3. Math.max, Math.min Method 활용하여 최댓값, 최솟값을 구한다. 
// 4. 템플릿리터럴 이용하여 최솟값과 최댓값을 공백을 이용해 문자열로 출력한다.

input = input.split('\n');


let splitedInput = input[1].split(' ');
// console.log(splitedInput);

let maxNum = Math.max(...splitedInput);
let minNum = Math.min(...splitedInput);
// console.log(maxNum);
// console.log(minNum);

// 문자열로 리턴하는 건줄 알았으나 숫자를 리턴해주는 거였다..!
//  
// return `${minNum} ${maxNum}`;
console.log(minNum, maxNum);

