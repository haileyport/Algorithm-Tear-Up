const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

// 중복 제거
const set = new Set(input); // 중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후,
let uniqueArr = [...set]; // Spread Operator(전개연산자)를 사용하여 Set 객체를 다시 배열로 변환

uniqueArr.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
  }
  return a.length - b.length;
});

console.log(uniqueArr.join("\n"));
