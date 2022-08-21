const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
// const input = fs.readFileSync('/dev/stdin').toString().trim();

let kg = Number(input);
let result = 0;

while (kg >= 0) {
  if (kg % 5 === 0) { // 5로 나눠떨어지면 결과에 kg/5 개를 더한다.
    result += kg / 5;
    kg = 0; // 나눠떨어졌으므로 남은 무게는 0
    break;
  }
  kg -= 3; // 5로 안나눠떨어지면 무게에서 3을 빼고 결과에 1개를 더한다.
  result++; 
} 

if (kg !== 0) { // 정확하게 N킬로그램을 만들 수 없으면 결과는 -1
  result = -1; 
}

console.log(result)