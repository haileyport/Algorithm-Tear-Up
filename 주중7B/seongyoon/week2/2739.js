let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = parseInt(input[0]);

for (let i=1;i<=9; i+=1) {
    console.log(`${a} * ${i} = ${a*i}`)
}