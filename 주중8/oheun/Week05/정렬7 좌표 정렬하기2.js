/*
통과 여부 : 통과!
시간 복잡도 : 460 ms
공간 복잡도 : 58248 KB

[문제]
문제 : 11651번 좌표 정렬하기 2 / 실버 5
y가 증가하는 순으로 정렬하되
y가 같으면 x좌표가 증가하는 순으로 정렬

입력 :
    - 첫째 줄 : 점의 개수 N
    - 둘째 줄~N+1째 줄 : i번째 점의 xi와 yi

출력 : 첫째 줄~n개의 줄에 점을 정렬한 결과 출력

[개념]
- 정렬

[아이디어]
1. 어떤 정렬이 맞을까?
2. y순으로 정렬한 다음에, x에 따라 삽입 정렬
3. 공간복잡도가 너무 큰데 어떻게 줄일 수 있지?

[유사 코드]
1. 입력 받기
2. 좌표

*/

//1. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
//let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let N = input.shift();  // 첫번째 수 받아서 제거
let dot = input.map(el => el.split(' ').map(Number));

// console.log(N, dot);
let sorted = dot.sort(function(a, b) {
    if(a[1] !== b[1]) return a[1]-b[1]; // y 기준으로
    return a[0]-b[0]; // x 기준으로
});

// console.log(sorted.join('\n'));

let answer = '';
sorted.forEach( el => {
    answer += el[0] + ' ' + el[1] +'\n';
})
console.log(answer);