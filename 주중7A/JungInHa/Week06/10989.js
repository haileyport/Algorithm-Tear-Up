const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.shift(); 
let N = Math.max(...input);
let howMany = new Array(N + 1).fill(0); 
// 0 부터 N까지의 수를 인덱스로 갖는 배열에 각 숫자의 객수를 세어준다

for (let i = 0; i < input.length; i++) {
  howMany[input[i]]++;
}

// howMany 배열을 순회하며 저장된 갯수만큼 숫자(=인덱스)를 출력해준다
for (let i = 0; i < howMany.length; i++) {
  for (let j = 0; j < howMany[i]; j++) {
    console.log(i);
  }
}
// 시간초과