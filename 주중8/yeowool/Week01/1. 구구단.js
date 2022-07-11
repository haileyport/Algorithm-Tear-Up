
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let result = "";
for(let i = 1; i <= 9; i++) {
        val = num * i
        result += `${num} * ${i} = ${val}` + `\n`
    }
console.log(result);