const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.pop(); // 마지막 0 제거
input.map((num) => {
  num = Number(num);
  let primeNums = [];

  // n보다 크고, 2n보다 작거나 같은 소수를 primeNums에 추가한다.
  for (let i = num + 1; i <= num * 2; i++) {
    let isPrime = (i === 1) ? false : true;
  
    for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++){
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      primeNums.push(i)
    }
  }

  console.log(primeNums.length) // 소수 갯수 출력
})