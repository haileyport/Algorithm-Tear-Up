let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map(n => parseInt(n));
let count = 0;

function isPrime(num){
    if(num === 2) return true;
    if(num === 1 || num%2 === 0) return false;
    for(let i = 3; i < parseInt(num); i++){
        if(num%i === 0) return false;
    }
    return true;
}

for(let i = 0; i < parseInt(input[0]); i++){
    if(isPrime(arr[i])) count++;      
}

console.log(count)
