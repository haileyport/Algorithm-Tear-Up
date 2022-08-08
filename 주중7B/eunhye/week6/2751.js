//수 정렬하기2

const fs = require("fs");
const raw = fs.readFileSync("text.txt", "utf8");
const input = raw.trim().split("\n").map(Number);
input.shift();
const set = new Set(input);
const arr = [...set].sort((a, b) => a - b);

let ans = "";
arr.map((el) => {
  ans += `${el}\n`;
});
console.log(ans);

//퀵소트

// const quickSort = (arr) => {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const pivot = [arr[0]];
//   const left = [];
//   const right = [];

//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       pivot.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// };

// const ans = quickSort(input);
