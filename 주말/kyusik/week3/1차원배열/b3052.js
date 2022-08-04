const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
/* 
1. 입력 받은 배열의 각 요소를 42로 나눈 나머지들을 구함
2. 각 나머지들을 빈 배열에 넣음
3. 만약 중복된 숫자가 나온다면 넣지 않음
4. 배열의 길이를 출력하면 된다.
*/
let remainder = [];

for(let i = 0; i < input.length; i++) {
    remainder[i] = parseInt(input[i]) % 42;
}

const set = new Set(remainder); // remainder의 중복값을 제거하기위해 Set객체로 만듦
const uniqueArr = [...set]; // 만들어진 객체를 spread 연산자로 풀어서 새 배열에 할당

console.log(uniqueArr.length); // 그 배열의 길이를 출력
