// 통과
// 1330 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

// 공백으로 구분된 한 줄의 값들을 입력 받을 때
const fs = require('fs');
// /dev/stdin을 적용해 stdin 파일을 비동기적으로 불러와 처리하는 것
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

// 틀린이유 1 : 함수처럼 return으로 정답을 반환하고자 함. 처음에 애초에 함수로 짰었음.
// console.log는 로그를 출력하는 것이다.
if (a > b) {
    console.log('>');
} else if (a < b) {
    console.log('<');
}else if(a === b) {
    console.log('==');
}
