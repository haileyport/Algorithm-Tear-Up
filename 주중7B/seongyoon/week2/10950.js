let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let a;
for (let i=1; i<=input[0]; i+=1) {
    a = input[i].split(' ');
    console.log(Number(a[0])+Number(a[1]));
}