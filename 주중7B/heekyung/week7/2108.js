let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const testCase = input.shift()
let avg = input.reduce((acc, cur) => acc+cur)
console.log(Math.round(avg/testCase))

input.sort((a,b) => a-b)
const middleNum = Math.floor(testCase/2)+1
console.log(input[middleNum-1])

//최빈값 해결못함

console.log(input[0]-input[input.length-1])