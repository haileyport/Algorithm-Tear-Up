let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => Number(el)));
let arr = input.slice(1, input.length);
let result = [];

for (let i = 0; i < arr.length; i++) {
  let grade = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) grade++;
    }
  }
  result.push(grade);
}

console.log(result.join(" "));
