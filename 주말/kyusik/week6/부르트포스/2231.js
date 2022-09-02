const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
 
const N = parseInt(input)
 
let M = 0
for(let i = 0; i < N; i++) {
  //각 자리수와 후보값의 합을 구하기 위한 변수
  let sum = 0;
 
  // 0부터 시작하는 후보값
  const candidateValue = i;
 
  //각 자리수를 구하기 위해서 숫자를 string으로 변환하여 계산한다.
  const stringValue = candidateValue.toString()
 
  for(let j = 0; j < stringValue.length; j++) {
    sum += parseInt(stringValue[j])
  }
 
  sum += candidateValue;
 
  if(sum == N) {
    M = candidateValue
    break;
  }
}
 
console.log(M)
