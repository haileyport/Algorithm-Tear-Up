/*
통과 여부 : 통과
공간 복잡도 : 9340 KB
시간 복잡도 : 124ms

시간제한 : 1초
메모리 제한 256MB

input : 알파벳 소문자, 대문자, 숫자 0-9 중 하나
output : 아스키 코드값

11654번 아스키코드
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때,
주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

아스키 코드란? 0부터 127까지의 총 128개의 숫자
- 48~57 => 0~9
- 65~90 => 알파벳 대문자
- 97~122 => 알파벳 소문자

** 아이디어
1. String.charCodeAt()을 사용하면 문자 코드를 ASCII코드로 변환 가능하다

*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();   // string형으로 불러옴.

var ascii_code = input.charCodeAt(0);
console.log(ascii_code);