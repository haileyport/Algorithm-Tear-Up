
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input.shift()

input = input[0].split(' ').map(Number)
const set = new Set(input);
let uniqueArr = [...set]
uniqueArr.sort((a,b) =>  a -b )
let object = {}

for(i=0; i<uniqueArr.length; i++){
	object[uniqueArr[i]] = i
}
let result = input.map(v=>object[v])
console.log(result.join(' '))