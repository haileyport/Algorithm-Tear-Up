const { count } = require('console');
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./01_1978.txt').toString().trim().split('\n');

let inputNum = input[1].split(' ').map(el => Number(el));

function isPrime(num) {
  if(num === 1){
    return false;
  }
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
  return true; 
}

function solution(income){
  let count = 0;
  for (let i = 0; i < income.length; i++){
    if(isPrime(income[i])){
      count++
    }
  }
  console.log(count);
}
solution(inputNum)