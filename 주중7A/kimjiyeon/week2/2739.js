let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();

input = Number(input);
for(let i= 1; i<=9; i++){
    console.log(`${input} * ${i} = ${input*i}`)
}