let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
input = input.map(Number);

const count = input.shift();
input.sort((a,b)=>a - b)

for(let i=0; i<count; i++){
    console.log(input[i])
}