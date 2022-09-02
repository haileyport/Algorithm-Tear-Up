
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift().split(' ').map(Number)
const testCase1 = testCase[0]

let A = new Set(input[0].split(' ').map(Number))
let B = new Set(input[1].split(' ').map(Number))
let result = new Set([...A , ...B])
A.forEach(i=> {
    if( B.has(i)){
        result.delete(i)
    }
})

console.log(result.size)
//set함수는 length가 아닌 size로 원소수를 반환한다.