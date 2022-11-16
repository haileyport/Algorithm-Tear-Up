const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')


const testCase = input.shift()
const numArr = input[0].split(' ');
let count = 0
for(i=0; i<numArr.length; i++){
    if(isPrime(Number(numArr[i]))){
    	count++
    }
 
}

function isPrime(num) {
  if (num <= 1){
    return false
  }
   for (k = 2; k<num; k++ ){
     if(num % k === 0) return false
   }
   return true
}

console.log(count)