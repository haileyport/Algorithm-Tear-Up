let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).split('\n');

// 백준 2941번, 크로아티아 알파벳
// 실버 5 / 9368 KB/ 124 ms

//문제 예시 이해가 안되어 찾아봄...
// 정규표현식/ replace 이용하더라! 

input = input[0];
let croatian = ['c=','c-','dz=','d-','lj','nj','s=','z='];
let count = 0;

// 실패 -> 중복때문인듯! 
// for(let i = 0; i < croatian.length; i++){
//   if(input.includes(croatian[i])){
//     input = input.replace(croatian[i], '');
//     count++;
//   }
// }

// console.log(count + input.length);

for(let i = 0; i < croatian.length; i++){
  while(input.includes(croatian[i])){
    input = input.replace(croatian[i], ' ');
    count++;
  }
}

let temp = input.split(' ');
console.log(count + (temp.join('')).length);