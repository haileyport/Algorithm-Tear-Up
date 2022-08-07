const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => +v);
const input = fs.readFileSync("06_9020.txt").toString().trim().split("\n").map(v => +v);
input.shift();
const MAX = Math.max(...input);
const answer = [];
let prime = new Array(MAX + 1).fill(true);
prime[0] = false;
prime[1] = false;

for (let i = 2; i * i <= MAX + 1; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= MAX + 1; j += i) {
      prime[j] = false;
    }
  }
}

input.forEach(v => {
  for (let i = Math.ceil(v / 2); i > 1; i--) {
    if (prime[i] && prime[v - i]) {
      answer.push(`${i} ${v - i}`)
      break;
    }
  }
})

console.log(answer.join('\n'))



// let fs = require('fs');
// // let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./06_9020.txt').toString().trim().split('\n');

// function isPrime(num) {
//   if(num === 1){
//     return false;
//   }
//   if(num === 2) {
//     return true;
//   }
//   for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
//     if(num % i === 0){
//       return false; 
//     }
//   }
//   return true; 
// }