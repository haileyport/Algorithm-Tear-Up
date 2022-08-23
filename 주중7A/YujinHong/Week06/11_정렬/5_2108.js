const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const sumNum = input.reduce((arr, cur) => arr + cur);
const avg = Math.round(sumNum / input.length);

// 산술평균 (소수점 이하 첫째 자리에서 반올림)
if (avg === -0) {
  console.log(-avg);
} else {
  console.log(avg);
}

const sortNum = input.sort((a, b) => a - b);

// 중앙값
console.log(sortNum[Math.floor(sortNum.length / 2)]);

// 최빈값 (여러 개 있을 때에는 최빈값 중 두 번 째로 작은 값)
let obj = {};

for (const el of sortNum) {
  if (el in obj) {
    obj[el]++;
  } else {
    obj[el] = 1;
  }
}

let max = Math.max(...Object.values(obj));
let modeArr = [];
for (const props in obj) {
  if (max <= obj[props]) {
    max = obj[props];
    modeArr.push(props);
  }
}

if (modeArr.length > 1) {
  console.log(modeArr.sort((a, b) => a - b)[1]);
} else {
  console.log(modeArr[0]);
}

// 범위
console.log(sortNum[sortNum.length - 1] - sortNum[0]);
