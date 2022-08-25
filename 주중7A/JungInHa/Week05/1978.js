const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let numbers = input[1].split(" ");

numbers = numbers.filter(function(num) {
  num = Number(num);
  let isPrime = (num === 1) ? false : true; // 1이면 소수가 아니다

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) { // 나눠 떨어지면 소수가 아니다.
      isPrime = false;
      break; 
    }
  } 
  
  if (isPrime) {
    return num; 
  }
})

console.log(numbers.length)