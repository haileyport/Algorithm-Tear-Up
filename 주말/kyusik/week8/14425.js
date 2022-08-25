const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const MS = input[0].split(' ');
const M = parseInt(MS[0]);
const MStrings = input.slice(1, 1 + M);
const SStrings = input.slice(1 + M);
let count = 0;
// MStrings엔 중복단어 가능, SStrings엔 중복단어 불가.

// case 1-1 SStrings의 요소를 Mset에 넣어 비교 - 정답
const MSet = new Set(MStrings);
SStrings.forEach((el) =>{
    if(MSet.has(el)) count++;
})
console.log(count);

// case 1-2 Mset의 요소를 SStrings에 넣어 비교 - 오답
// 그런데 case 1-1과 값은 같게 나옴. MStrings에 중복 단어가 있어도 set때문에 중복이 사라지기 때문에 당연함.
// const MSet = new Set(MStrings);
// MSet.forEach((el) =>{
//     if(SStrings.includes(el)) count++;
// })
// console.log(count);

// case 2-1 set안쓰고 배열끼리 비교, SStrings의 요소를 MStrings에 넣어 비교 - 시간초과
// for(const el of SStrings){
//     if(MStrings.includes(el)){
//         count ++;
//     }  
// }
// console.log(count);

// case 2-2 set안쓰고 배열끼리 비교, MStrings의 요소를 SStrings에 넣어 비교 - 오답
// for(const el of MStrings){
//     if(SStrings.includes(el)){
//         count ++;
//     }
// }
// console.log(count);

/* 백준 입력
5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink */

/* //백준입력에서 M에 문자 하나를 중복문자로 교체한 테스트케이스
5 11
baekjoononlinejudge
startlink
startlink
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink */


'https://stackoverflow.com/questions/39007637/javascript-set-vs-array-performance'
'https://velog.io/@sozero/TIL-220307-Set.has-%EC%99%80-Array.includes-%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84'
'https://www.youtube.com/watch?v=PAdNyqU85zM'
'https://kim-born-in-mapo.tistory.com/27'