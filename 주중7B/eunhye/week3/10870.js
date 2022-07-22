//피보나치 수 5

//F(n) = F(n-1)+F(n-2) (n>=2)
//F(0) = 0 + 0
//F(1) = 0 + 1
//F(2) = 1 + 1
//F(3) = 1 + 2
//n번째 피보나치 수를 구하시오 (0<= 0 <20);

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString();

const getN = (num) => {
  if (num >= 0 && num <= 20) {
    //문제를 잘 읽자...^^
    return Number(num);
  }
};

const exception = (num) => {
  return num === 0 || num === 1 ? true : false;
};

const fib = (len, num) => {
  let nextFib = fibList[0] + fibList[1];
  fibList = [fibList[1], nextFib];
  return len === num ? nextFib : fib(len + 1, num);
};

const n = getN(input);
let fibList = [0, 1];
const isExcept = exception(n);
const lastFib = isExcept ? n : fib(2, n);
console.log(lastFib);
