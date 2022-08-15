
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift().split(' ').map(Number)
const testCase1 = testCase[0]
const testCase2 = testCase[1]+testCase[0]

let groupM = input.slice(0, testCase1)
let groupS = input.slice(testCase1)

const obj = {}
let count = 0

groupS.forEach(i=>obj[i]=true)
groupM.forEach(i=> {if(obj[i]) return count++})
console.log(count)

//틀렸습니다