//팩토리얼

//재귀는 자기자신을 호출

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString();
const stringTonum = (num) => {
  return Number(num);
};

const double = (x, n) => {
  if (num === 0) {
    return 1;
  }
  return x === n ? x : n * double(x, n + 1);
};

const num = stringTonum(input);
const answer = double(num, 1);

console.log(answer);
