/* 10950번 A+B - 3 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

// 테이스 케이스 개수를 할당
let testCase = input[0];
let num1 = [];
let num2 = [];

// 테스트 케이스에 있는 두 수를 각각 배열에 넣기
for(let i = 1; i < input.length; i++){
    num1.push(+input[i].split(" ")[0]);
    num2.push(+input[i].split(" ")[1]);
}

// 0부터 테스트 케이스 개수만큼 반복하며 각 배열의 i번째 값끼리 더해서 출력하기
function solution(testCase, num1, num2){
    for(let i = 0; i < testCase; i++){
        console.log(num1[i] + num2[i]);
    }
}

solution(testCase, num1, num2);