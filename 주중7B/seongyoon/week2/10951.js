let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for (let i=0; i<=input.length-1; i+=1) {
    result += Number(input[i].split(' ')[0])+Number(input[i].split(' ')[1])+'\n';
}
console.log(result);