const fs = require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//이것도 테스트 케이스의 수가 길이고 나머지는 배열처럼있음
let count = Number(input[0]);
let sum = '';
for(let i = 1;  i<=count; i++ ){
    let arr = input[i].split(" ");
    
    let a = Number(arr[0]);
    let b = Number(arr[1]);
    
     sum += a + b + "\n";
}
console.log(sum);//