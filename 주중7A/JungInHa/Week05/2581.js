const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const min = Number(input[0]);
const max = Number(input[1]);
let primeNums = [];

// min이상 max이하 수 중 소수만 primeNums 배열에 추가한다.
for (let i = min; i <= max; i++) {
  let isPrime = (i === 1) ? false : true; // 1이면 소수가 아니다

  for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
    if (i % j === 0) { // 나눠 떨어지면 소수가 아니다.
      isPrime = false;
      break; 
    }
  } 

  if (isPrime) {
    primeNums.push(i)
  }
}

// 소수가 없으면 -1을 출력, 있으면 소수 전체의 합과 가장 작은 소수를 출력
if (primeNums.length === 0) {
  console.log(-1)
} else {
  let sumPrime = primeNums.reduce(
    (acc, cur) => acc + cur
  );
  
  console.log(sumPrime);
  console.log(Math.min(...primeNums));
}