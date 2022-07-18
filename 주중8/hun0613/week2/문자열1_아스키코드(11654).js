// 메모리 : 9336KB
// 시간 : 124ms


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

/*
    codePointAt() -> 문자를 아스키코드로 리턴해주는 메소드
*/

console.log(input.codePointAt());