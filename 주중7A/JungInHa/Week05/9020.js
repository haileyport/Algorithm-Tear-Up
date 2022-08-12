const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let testCases = input.slice(1)

function primeChecker(num) {
  let isPrime = true;

  for(let j = 2; j <= Math.floor(Math.sqrt(num)); j++){
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

testCases.map((input) => {
  input = Number(input)
  let goldbach;

  // 작은 소수가 num1 이여야 하므로 num1은 input/2까지가 최대 
  for (let num1 = 2; num1 <= input/2; num1++) { 
    let num2 = input - num1; 
    // n에서 한 소수를 뺐을 때 남은 수도 소수이면, 두 소수는 그 수의 골드바흐 파티션
    if (primeChecker(num1) && primeChecker(num2)) {
      goldbach = `${num1} ${num2}`;
    } // 두 소수의 차이가 가장 작은 경우 = input/2에 더 가까운 경우 
  }

  console.log(goldbach);
})