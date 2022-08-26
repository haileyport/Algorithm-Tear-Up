//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let ASet = new Set(input[1].split(' ').map(Number)) //['1', '2', '4']
let BSet = new Set(input[2].split(' ').map(Number)) //['2', '3', '4', '5', '6']

let count = 0;
ASet.forEach(ele => {
    if(!BSet.has(ele)) count ++
})
BSet.forEach(ele=>{
    if(!ASet.has(ele)) count++
})
console.log(count)
