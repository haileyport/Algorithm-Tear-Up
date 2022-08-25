const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const MS = input[0].split(' ');
const M = parseInt(MS[0]);
//const S = parseInt(MS[1]);
const MStrings = input.slice(1, 1 + M);
const SStrings = input.slice(1 + M);
let count = 0;

// for(const el of SStrings){
//     if(MStrings.includes(el)){
//         count ++;
//     }  
// }

// console.log(count);
//MString에 중복되는 문자열이 많아지면 시간초과가 나는것 같다.
// set을 쓰면 중복되는 문자열을 없애주기때문에 set을써보자

const MSet = new Set(MStrings);
SStrings.forEach((el) =>{
    if(MSet.has(el)) count++;
})
console.log(count);

/* for(const el of MStrings){
    if(SStrings.includes(el)){
        count ++;
   //문제에서 S에는 중복이 없다고했지만 M에는 그런 조건이 없었다. 만약 M에 중복 단어가 있다면 이 코드로는 중복된 갯수만큼 카운트가 더 되서 오답임.
    }
}
    ex)    const MStrings = input.slice(1, 1 + M);
    [
        'baekjoononlinejudge',
        'startlink',
        'startlink',
        'sundaycoding',
        'codingsh'
    ] 
    const SStrings = input.slice(1 + M);
    [
        'baekjoon',     'codeplus',
        'codeminus',    'startlink',
        'starlink',     'sundaycoding',
        'codingsh',     'codinghs',
        'sondaycoding', 'startrink',
        'icerink'
    ] */



'https://stackoverflow.com/questions/39007637/javascript-set-vs-array-performance'
'https://velog.io/@sozero/TIL-220307-Set.has-%EC%99%80-Array.includes-%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84'
'https://www.youtube.com/watch?v=PAdNyqU85zM'
'https://kim-born-in-mapo.tistory.com/27'