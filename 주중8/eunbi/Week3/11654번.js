let fs = require('fs');
const { format } = require('path');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('test.txt').toString( ).trim();

// 백준 11654번, 아스키 코드 
// 브론즈5 / 9336KB / 132ms

// 1. JS 메서드 charCodeAt(): 지정된 문자를  ASCII코드 변환해줌 
// String.charCodeAt(index);
// + 참고) 반대로 아스키코드 입력시 문자를 반환해주는 메서드는 fromCharCode()이다.
// 2. 숫자일 경우는? 문자열로 받아서 위의 메서드 이용 

console.log(input.charCodeAt(0));