// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 4 ≤ n ≤ 10,000
let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const testNum = input.shift();
let testcase = input.map(v => Number(v.trim()));
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
let result='';
for (const n of testcase) {
  for (let i = 0; i < n/2-1; i++) {
    let a = n/2 - i;
    let b = n/2 + i;
    if(isPrime(a) && isPrime(b)){
      result += (`${a} ${b}`) + "\n";
      break;
    }
  }
}

console.log(result);