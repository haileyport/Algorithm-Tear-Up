// 빠른 A+B

const fs = require("fs");
const input = fs.readFileSync("../예제.txt").toString().trim().split("\n");

let num = [];
let a = 0;
let b = 0;
let result = "";

for (let i = 1; i <= input[0]; i++) {
  num = input[i].split(" ");
  a = Number(num[0]);
  b = Number(num[1]);

  result = result + (a + b) + "\n";
}

console.log(result);
