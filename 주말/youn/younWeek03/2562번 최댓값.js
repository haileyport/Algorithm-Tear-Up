const fs = require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=>Number(x));
//[3,29,38,12,57,74,40,85,61]
//최댓값은...math.max사용하자
//반복문으로 하면될듯?

const max = Math.max(...input)
 console.log(max)
console.log(input.indexOf(max)+1)