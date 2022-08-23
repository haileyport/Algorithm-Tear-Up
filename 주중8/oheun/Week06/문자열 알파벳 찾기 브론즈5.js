/*
통과 여부 : 
시간 복잡도 :
공간 복잡도 : 

input :
    1) 단어 

output :
    1) 각 알파벳이 처음 등장하는 위치
    2) 단어에 포함되어 있지 않다면 -1

* 의사 코드
    각 알파벳 자리를 있으면 index로 대신하기
* 틀린 이유
    출력
    왜 틀리지....?
*/


//1. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('');

//  Array.from 복사
// 길이가 26인
// 97부터 A니까 바꿔서 가져오기
let arr = Array.from({length : 26}, (v, i) => String.fromCharCode(i+97));
// console.log(arr);
let result = [];
for (let i = 0; i < 26; i++) {
    result.push(input.indexOf(arr[i]));
}

console.log(result.join(' '));