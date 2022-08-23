const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [c, nums] = input.split("\n");

const isPrime = (n) => {
    if (n == 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
}

console.log(nums.split(" ").filter(v => isPrime(v)).length);


// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');//.map(n => Number(n));

// let n = input[1].split(' ');
// console.log(n);
// let primeArr = [];
// for(let el of n){
//     for(let i = 1; i <= Math.sqrt(el); i++){
//         if(el % i === 0){
//             false
//         } else {
//             primeArr.push(el);
//         }
//         console.log(primeArr);
//     }
// }
// console.log(primeArr);