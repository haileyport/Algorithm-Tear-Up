let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
input= input.slice(1).map(Number);
let replaceBigNumber = input.sort(function(a,b){
   return (Number(a)-Number(b))
})

replaceBigNumber.forEach(el => console.log(el))

//메모리 초과??
