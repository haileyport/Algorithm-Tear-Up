const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

let sumArr = new Array(input.length).fill([])

// const arr =input.map((el, idx) => {
// 	for(i=Number(el); i<=(Number(el)*2); i++){
// 	if(isPrime(i)){
// 		sum[idx].push(i)
// 	}
// 	return sum
// }

// })
for(i=0; i<input.lenght; i++){
	for(j=Number(input[i]); j<=Number(input[i])*2; j++ ){
		if(isPrime(j)){
			sumArr[i].push(j)
		}
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

console.log(sumArr)

// 틀림.