let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let output = '';

for(let i=1;i<=num;i++){
    output = output + i +"\n"
}
console.log(output);