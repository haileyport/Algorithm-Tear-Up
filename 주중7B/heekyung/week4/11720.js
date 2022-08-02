const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let shift2 = input.shift()
// testCase 삭제
const arr = input.toString().split('')
// string 으로 형 변환 후 배열전환
const numArr = arr.map(Number)
// number으로 형 변환

let result = numArr.reduce((acc,cur)=> acc+cur)
// 전부 합산
console.log(result)
