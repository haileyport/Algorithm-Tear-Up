// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim().split("\n");

const nx = input[0].split(" ");
const n = Number(nx[0]);
const x = Number(nx[1]);

const a = input[1].split(" ");

let result = "";

for (let i = 0; i < a.length; i++) {
  if (a[i] < x) {
    result += a[i] + " ";
  }
}

console.log(result);
