// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let N = Number(input.shift());
let arr = input[0].split(' ').map(x => +x);

let set = new Set(arr); // 중복 제거
let uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, index) => { dic[e] = index; }) // sort 된 순으로 index번호를 부여
let answer = '';
// 배열에 맞는 key의 value를 answer에 추가
for (let i = 0; i < arr.length; i++) {
  answer += dic[arr[i]] + ' ';
}

console.log(answer);