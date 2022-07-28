let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);;
// let input = require('fs').readFileSync('예제.txt').toString().split('\n');
// console.log(input)//['3', '29', '38', '12', '57', '74', '40', '85', '61']

let num = input[0];
let index = 0;

for(let i = 1; i < 9; i++){
  if(input[i] > num){
    num = input[i];
    index = i;
  }
}

console.log(num)
console.log(index + 1)
