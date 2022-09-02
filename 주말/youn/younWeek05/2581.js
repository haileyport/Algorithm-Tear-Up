let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);
//에라토스테네스의 체
const isPrime = (num) => {
    if(num < 2) return false;

    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }

    return true;
}

let sum = 0;
let min = 0;

for (let num = num1; num <= num2; num++) {
    if(isPrime(num)) {
        sum += num;
        if(min === 0) min = num; 
    }
   
}

if(min) {
   console.log(sum);
   console.log(min); 
} else {
   console.log(-1);
}