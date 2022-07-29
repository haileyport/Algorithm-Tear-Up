let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
//console.log(input[0]) 

let result = 1;
for(let i = 1; i <= input[0]; i++){
    if(input[0] === 0){
        return 1;
    }
    result *= i;
}
console.log(result)
