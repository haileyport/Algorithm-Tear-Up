// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const m = Number(input[0]), n = Number(input[1]);
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
let sum = 0, min = n;
for (let i = m; i <= n; i++) {
  if(isPrime(i)){
    sum += i;
    if(i < min) min = i;
  }
}
if(sum===0) console.log(-1);
else{
  console.log(sum);
  console.log(min);
}