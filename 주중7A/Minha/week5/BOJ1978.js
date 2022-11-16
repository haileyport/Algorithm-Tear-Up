// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const arr = (input[1].split(' ').map(v=>Number(v)));
const isPrime = (n) =>{
    if(n===1) return false;
    else{
      let count = 0;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i===0) count++;
      }
      return (count === 0) ? true:false; 
    }
  
}
console.log(arr.filter(v => isPrime(v)).length);