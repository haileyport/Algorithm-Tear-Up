let input = require('fs').readFileSync('/dev/stdin').toString();

let answer = '';

for(let i = 0; i < input; i++){
    answer = answer + '*'
    console.log(answer);
}
