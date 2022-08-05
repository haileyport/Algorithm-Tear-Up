const fs = require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const length= input.splice(' ')[0]
const num = input.splice(' ')[1]

const arr = num.splice(' ')

console.log(Math.min(arr)+ ' '+ Math.max(arr));

