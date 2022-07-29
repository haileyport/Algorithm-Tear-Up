let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = Number(input[0])
// let result = 1;

// for(let i =1; i<=n; i++){
//     result *= i
// }
// console.log(result);
//for 문 사용법

function factorial(num){
    if (num <= 1){
        return 1;
    }
    return num * factorial(num-1);
}

const fac = factorial(n);
console.log(fac);