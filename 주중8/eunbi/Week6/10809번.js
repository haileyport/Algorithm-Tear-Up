let fs = require('fs');
const { format } = require('path');
const { isGeneratorFunction } = require('util/types');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).split('\n');

// 백준 알파벳 찾기
// 브론즈 5/ 9348 KB/ 184 ms

// a-z 알파벳으로 이루어진 배열 생성
// indexOf이용하여 el이 input에 위치한다면 위치 반환, 없다면 -1반환

const alphabet = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
input = input[0];

let result = alphabet.map(el => {
  return input.indexOf(el);
})

console.log(result.join(' '));