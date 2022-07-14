//N을 입력받은 뒤, 구구단 N단을 출력

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");

let num = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

