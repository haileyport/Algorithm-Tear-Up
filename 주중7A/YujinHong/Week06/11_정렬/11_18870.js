// 좌표를 압축한다 : 해당 좌표의 값을 그 값보다 작은 좌표값들(중복X)의 개수로 대체한다의 의미
const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ");

// 중복 제거
const set = new Set(input); // 중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후,
let uniqueArr = [...set]; // Spread Operator(전개연산자)를 사용하여 Set 객체를 다시 배열로 변환
// let sortUniqueArr = [...set].sort((a, b) => a - b); // Spread Operator(전개연산자)를 사용하여 Set 객체를 다시 배열로 변환

let result = "";

// Case 1
for (const el1 of input) {
  let count = 0;
  for (const el2 of uniqueArr) {
    if (Number(el1) > Number(el2)) {
      count++;
    }
  }
  result += count + " ";
}

// Case 2
// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < sortUniqueArr.length; j++) {
//     if (input[i] === sortUniqueArr[j]) {
//       result += j + " ";
//     }
//   }
// }

console.log(result);
