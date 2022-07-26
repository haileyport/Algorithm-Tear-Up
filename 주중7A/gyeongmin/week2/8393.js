let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

let sum = 0;
for(let i = 1; i <= num; i++){
    sum = sum + i
}
console.log(sum)
