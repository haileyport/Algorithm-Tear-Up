const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let sum = 0;
let count = 0 ;

for(let i = 1; i <= num; i++){
    for(let j =0; j < input[i].length; j++){
        if(input[i][j] === 'O'){
            count++;
        } else{
            count = 0;
        }
        sum += count;
    }
    count=0;
    console.log(sum);
    sum =0;    
}