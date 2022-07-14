let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let number = input[i].split(' ');
    
    console.log(`Case #${i}: ${Number(number[0])} + ${Number(number[1])} = ${Number(number[0]) + Number(number[1])}`);
}
