let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./02_2581.txt').toString().trim().split('\n');

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
  let arr = [];
  let start = Number(income[0]);
  let end = Number(income[1]);
  for(start; start <= end; start++){
    if(isPrime(start)){
      arr.push(start)
    }
  }
  console.log(arr);
  if (arr.length !== 0){
    console.log(arr.reduce((a, b) => a + b))
    console.log(arr[0]);
  }else{
    console.log(-1);
  }
}
solution(input)