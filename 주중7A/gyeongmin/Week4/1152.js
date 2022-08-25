let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
//console.log(input)

let S = input[0].trim().split(' ')
//console.log(S)

if(input[0] === ''){
    console.log(0);
}else{
    console.log(S.length);
}
