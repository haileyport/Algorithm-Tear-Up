let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n")
input.map(x=>x.split(' '))
let count = input.shift() 
count = count.split(' ');
let cutline = Number(count[1])
input = input[0].split(' ')
input.sort((a,b)=>b-a)
console.log(input[cutline-1])