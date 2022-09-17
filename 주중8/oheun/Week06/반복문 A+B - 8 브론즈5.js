/*
통과 여부 : 통과!
시간 복잡도 : 124ms
공간 복잡도 : 9512 KB

input :
1) 첫째 줄 테스트 케이스의 개수
2) 각 줄에 A+B

output :
1) Case #x: A + B = C

* 의사 코드
1. 입력 받기
2. 반복문

* 틀린 이유 Number()
*/

//1. 입력 받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let testCase = input.shift();

// console.log(testCase);

for (let i = 0; i < testCase; i++) {
  let number = input[i].split(" ");
  console.log(
    `Case #${i + 1}: ${number[0]} + ${number[1]} = ${
      Number(number[0]) + Number(number[1])
    }`
  );
}
