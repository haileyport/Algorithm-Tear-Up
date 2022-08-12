const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = parseInt(input);
let count = 1; // 중심으로부터 떨어진 칸 수
let address = 1; // 그 거리에 있는 최대 숫자

while (address < num) {
  address += 6 * count;
  count++;
}

console.log(num, count);