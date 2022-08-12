let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
input = input.map(Number);

const count = input.shift();
input.sort((a,b)=>a-b)
let output = []
for(let i=0; i<count; i++){
    output.push(input[i])
}
console.log(output.join('\n'))