let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./04_1929.txt').toString().trim().split(' ');

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

function solution (income){
  let result = '';
  let start = Number(income[0]);
  let end = Number(income[1]);
  for(start; start <= end; start++){
    if(isPrime(start)){
      result += start + '\n'
    }
  }
  console.log(result);
}
solution(input)