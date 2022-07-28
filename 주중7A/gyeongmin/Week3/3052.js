let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);;
//let input = require('fs').readFileSync('예제.txt').toString().split('\n');
//console.log(input) //['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

let arr = [];

for(let i = 0; i < input.length; i++){
  //수를 42로 나눈 나머지 arr에 넣기
  arr.push(input[i]%42);
}
//console.log(arr);
//arr에서 중복값 제거
let newArr = [...new Set(arr)];
//console.log(newArr)

//다른 값이 몇개인지
console.log(newArr.length);
