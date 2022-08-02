const input = require("fs").readFileSync("/dev/stdin").toString().trim()
let num = Number(input)

// while(!isPrime(num)){
// 	if(num % 2 === 0){
// 		num /= 2
// 		console.log(2)
// 		continue;
// 	}
// 	if (num %3 === 0){
// 		num/=3
// 		console.log(3)
// 		continue;
// 	}
// }
// if(isPrime(num)){
// 	console.log(num)
// }

// function isPrime(num) {
//   if (num <= 1){
//     return false
//   }
//    for (k = 2; k<num; k++ ){
//      if(num % k === 0) return false
//    }
//    return true
// }

//이렇게하면 9991을 소인수 분해하기 힘들다.
//for문안에 while문을 돌리면 자신의 수까지 모든 수를 나눠서 소수를 찾고, 그 수를 자신에게 나눠서
// 계산이 가능하다.


let result = [];
for (let i = 2; i <= num; i++) {
  while (num % i === 0) {
    num = num / i;
    result.push(i);
  }
}
console.log(result.join("\n"));