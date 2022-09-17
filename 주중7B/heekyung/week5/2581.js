const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')
const M = Number(input[0])
const N = Number(input[1])

let sum = []
for(i=M; i<=N; i++){
	if(isPrime(i)){
		sum.push(i)
	}
}

const sumsum = sum.reduce((acc,cur)=> acc+cur)
const sumfirst = sum.shift()

function isPrime(num) {
  if (num <= 1){
    return false
  }
   for (k = 2; k<num; k++ ){
     if(num % k === 0) return false
   }
   return true
}

console.log(sumsum+'\n'+sumfirst)

