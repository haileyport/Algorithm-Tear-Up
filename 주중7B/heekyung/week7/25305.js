let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let testCaseArr = input.shift()
let testCase = testCaseArr.split(' ').map(Number)
let testCaseA = testCase.shift()

let arrNum = input[0].split(' ').map(Number)
arrNum.sort((a, b) =>  b - a);
let cutNum
for(i=0; i<testCase; i++ ){
    cutNum =  arrNum[i]
}

console.log(cutNum)
