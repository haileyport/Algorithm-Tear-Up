const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const fixedCost = parseInt(input[0]);
const variableCost = parseInt(input[1]);
const price = parseInt(input[2]);

// 손익 분기점 = 고정비용 A / 마진 
let breakPoint;

if (variableCost >= price) {
  // 가변비용 B >= 노트북 가격 C면, 마진이 발생할 수 없어 손익분기점도 없음.
  breakPoint = -1;
} else {
  // 최초로 이익이 발생하는 판매량 = 손익분기점 + 1
  breakPoint = Math.floor(fixedCost / (price - variableCost)) + 1; 
}

console.log(breakPoint);