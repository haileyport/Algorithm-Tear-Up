// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

const numArr = input[1].split(" ");
let max = Number(numArr[0]);
let min = Number(numArr[0]);

for (let i = 1; i < Number(input[0]); i++) {
  let currentNum = Number(numArr[i]);

  if (max < currentNum) {
    max = currentNum;
  }
  if (min > currentNum) {
    min = currentNum;
  }
}

console.log(`${min} ${max}`);
