//OX 퀴즈

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let ans = "";

for (i = 1; i <= input[0]; i++) {
  //테스트케이스마다 실행
  let nonX = replaceX(input[i]);
  let math = replaceO(nonX);
  ans += `${math}\n`;
}

console.log(ans);

//functions

function replaceX(str) {
  return str.replace(/X/gi, "0");
}

function replaceO(str) {
  str = str.trim();
  let plus = 1;
  let sum = 0;
  let state = "";
  for (k = 0; k < str.length; k++) {
    if (str[k] === "0") {
      state === "X" ? plus : (plus = 1);
      state = "X";
    } else {
      sum += plus;
      state = "O";
      plus++;
    }
  }
  return sum;
}
