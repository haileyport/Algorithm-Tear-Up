/*
통과 여부 : 통과!
시간 복잡도 : 132ms
공간 복잡도 : 9408 KB

[문제]
문제 : 2750번 수 정렬하기
오름차순 정렬

입력 :
    - N개의 줄

출력 : 오름차순으로 정렬한 결과 출력

[개념]
- 정렬

[아이디어]
1. 중복 제거

[유사 코드]
1. 입력 받기
2. 좌표

[틀린 이유]
- 왜 틀려!?!?왜 틀려!?!?왜 틀려!?!?왜 틀려!?!?왜 틀려!?!?왜 틀려!?!?왜 틀려!?!?
=> 첫째 줄 뺐어야지!!
*/


//1. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\r\n');

let N = input.shift();
let sorted = input.sort((a,b) => {
    return a-b;

})

// console.log(N, sorted);

// let answer = sorted.filter(function(item, index){
// 	return sorted.indexOf(item) === index;
// });

// console.log(answer.join('\n'));

// 이렇게 출력했을 때, 메모리 10468 KB, 시간 204ms
// for (let i = 0; i < N; i++) {
//     console.log(sorted[i]);
// }

// 이렇게 출력했을 때, 메모리 9408 KB, 시간 132ms
console.log(sorted.join('\n'));